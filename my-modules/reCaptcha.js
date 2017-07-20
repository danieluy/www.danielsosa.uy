const request = require('request');

const config = require('../config.json');

module.exports = function (req, res, next) {
  request.post('https://www.google.com/recaptcha/api/siteverify', {
    form: {
      secret: config.captcha.secret,
      response: req.body['g-recaptcha-response']
    }
  }, function (err, status, response) {
    if (err || !status || status.statusCode !== 200 || !response) {
      if (err)
        console.error(err)
      if (!status)
        console.error(`The post request to https://www.google.com/recaptcha/api/siteverify returned no status`)
      if (status.statusCode !== 200)
        console.error(`The post request to https://www.google.com/recaptcha/api/siteverify returned statusCode === ${status.statusCode}`)
      if (!response)
        console.error(`The post request to https://www.google.com/recaptcha/api/siteverify returned no response`)
      res.status(500).json({ error: { code: 500, error: 'Internal Error' } });
    }
    else {
      try {
        const body = JSON.parse(response);
        if (body.success)
          next();
        else
          res.status(401).json({ error: { code: 401, error: 'Unauthorized' } });
      }
      catch (err) {
        console.error(err)
        res.status(500).json({ error: { code: 500, error: 'Internal Error' } });
      }
    }
  })
}
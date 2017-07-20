import request from 'request';

const origin = `${location.protocol}//${location.host}`;
// const origin = 'http://localhost:3372';

/*
cb: function(err, res, body){
  if(err)
  else
}
*/

export default {
  email: function (form, cb) {
    request.post({
      url: `${origin}/api/sendmail`,
      form: form
    }, responseHandler.bind(null, cb))
  }
}

function responseHandler(cb, err, res, body) {
  if (err)
    cb(err);
  else if (res)
    switch (res.statusCode) {
      case 200: cb(null, JSON.parse(body)); break;
      case 401: cb(new Error401()); break;
      case 404: cb(new Error404()); break;
      case 500: cb(new Error500()); break;
      default: cb(new Error()); break;
    }
  else
    cb(new ErrorUnreachable());
}






function ErrorUnreachable() {
  this.name = 'ErrorUnreachable';
  this.message = 'Server unavailable';
  this.stack = (new Error()).stack;
}
ErrorUnreachable.prototype = Object.create(Error.prototype);
ErrorUnreachable.prototype.constructor = ErrorUnreachable;

function Error401() {
  this.name = 'Unauthorized';
  this.code = 401;
  this.message = 'Authorization required';
  this.stack = (new Error()).stack;
}
Error401.prototype = Object.create(Error.prototype);
Error401.prototype.constructor = Error401;

function Error404() {
  this.name = 'Error404';
  this.code = 404;
  this.message = 'Not found';
  this.stack = (new Error()).stack;
}
Error404.prototype = Object.create(Error.prototype);
Error404.prototype.constructor = Error404;

function Error500() {
  this.name = 'Error500';
  this.code = 500;
  this.message = 'Internal server error';
  this.stack = (new Error()).stack;
}
Error500.prototype = Object.create(Error.prototype);
Error500.prototype.constructor = Error500;
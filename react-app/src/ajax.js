import request from 'request';

export default {
  email: function (form, callback) {
    request.post({
      url: 'http://localhost:3372/dev/contact',
      form: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message
      }
    }, callback)
  }
}




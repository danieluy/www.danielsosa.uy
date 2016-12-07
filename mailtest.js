const nodemailer = require('nodemailer');

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'danielsosa.foo@gmail.com',
    pass: 'Ddba9151'
  }
};
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols
const mailOptions = {
    from: '"Daniel Sosa" <danielsosa.foo@gmail.com>',
    to: 'danielsosa.dev@gmail.com', // list of receivers
    subject: 'Message from www.danielsosa.uy', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

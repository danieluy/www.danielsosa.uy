"use strict"
const fs = require('fs')
const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const bodyParser = require("body-parser");
const sessions = require('client-sessions');
const nodemailer = require('nodemailer');

const ENGLISH = require('./content/lang-en.json');
const SPANISH = require('./content/lang-es.json');
const CONFIG = require('./config.json');

//  Public folders  ////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

// Session Config. /////////////////////////////////////////////////////////////
const secret = CONFIG.session.secret;
const duration = CONFIG.session.durationHours;
const activeDuration = CONFIG.session.activeDurationHours;
app.use(sessions({
  cookieName: 'session',
  secret: secret,
  duration: duration * 60 * 60 * 1000,
  activeDuration: activeDuration * 60 * 60 * 1000,
  cookie:
  {
    ephemeral: false,
    httpOnly: false,
    secure: false
  }
}));

// Nodemailrer Config  /////////////////////////////////////////////////////////
const nodemailer_auth_user = CONFIG.nodemailer.auth.user;
const nodemailer_auth_pass = CONFIG.nodemailer.auth.pass;
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: nodemailer_auth_user,
    pass: nodemailer_auth_pass
  }
});

// Middleware //////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: false }));

// HttpGET /////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/home.html'));
});

// HttpPOST  ///////////////////////////////////////////////////////////////////

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

app.post('/dev/contact', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let message = req.body.message;
  const mailOptions = {
    from: '"Daniel Sosa" <danielsosa.foo@gmail.com>',
    to: 'danielsosa.dev@gmail.com',
    subject: 'Message from www.danielsosa.uy',
    text: 'From: ' + name + ' <' + email + '> - Phone: ' + phone + ' - Message: ' + message,
    html: `
        <p>From: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone || ''}</p>
        <label>Message:</label>
        <p>${message}</p>
      `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(`
        <h1>Sorry, there was a server error</h1>
        <p>Something went wrong when triyng to send your message</p>
        <p>Please try again or contact danielsosa.dev@gmail.com directly</p>
      `);
    }
    else {
      res.status(200).redirect('/dev#contact')
    };
  });
})

// 404 /////////////////////////////////////////////////////////////////////////

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

http.listen(3372, function () {
  console.log(
    '···········································\n' +
    '·                                         ·\n' +
    '·   Server listening on: localhost:3372   ·\n' +
    '·       Press Ctrl-C to terminate         ·\n' +
    '·                                         ·\n' +
    '···········································'
  );
});

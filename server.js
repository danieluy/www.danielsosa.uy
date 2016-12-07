"use strict"
const fs = require('fs')
const express = require('express');
const app = express();
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
app.use(bodyParser.urlencoded({extended: false}));

// HttpGET /////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/home.html'));
});


app.get('/dev', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/dev.html'));
});

app.get('/dev/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/dev.html'));
});

// HttpPOST  ///////////////////////////////////////////////////////////////////

app.post('/lang', (req, res) => {
  if(req.body.page !== 'home' && req.body.page !== 'dev' && req.body.page !== 'arq' && req.body.page !== 'img')
    res.status(400).json({error: '400 Bad Request', details: 'The page ' + req.body.page + ' does not exist'})
  if(req.body.lang)
    req.session.lang = req.body.lang;
  else if(!req.session.lang)
    req.session.lang = 'es'
  res.status(200).json(req.session.lang === 'es' ? SPANISH[req.body.page] : ENGLISH[req.body.page])
});

app.post('/dev/contact', (req, res) => {
  let sender = req.body.sender;
  let message = req.body.message;
  const mailOptions = {
      from: '"Daniel Sosa" <danielsosa.foo@gmail.com>',
      to: 'danielsosa.dev@gmail.com',
      subject: 'Message from www.danielsosa.uy',
      text: 'From: '+sender+' - Message: '+message,
      html: '<p>From: '+sender+'</p><p>Message: '+message+'</p>'
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if(error) res.status(500).json(error);
      else res.status(200).json(info);
  });
})

// Access-Control-Allow-Origin: *  /////////////////////////////////////////////
// From here on cross-origin resource sharing is allowed for any origin to any route
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API calls here //////////////////////////////////////////////////////////////

// 404 /////////////////////////////////////////////////////////////////////////

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(3000, function(){
  console.log(
    '/////////////////////////////////////////////\n' +
    '//                                         //\n' +
    '//   Server listening on: localhost:3000   //\n' +
    '//       Press Ctrl-C to terminate         //\n' +
    '//                                         //\n' +
    '/////////////////////////////////////////////'
  );
});

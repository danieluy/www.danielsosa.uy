"use strict";

const express = require('express');
const json_api_router = express.Router();
const body_parser = require("body-parser");
const nodemailer = require('nodemailer');
const config = require('../config.json');

// Nodemailrer Config
const nodemailer_auth_user = config.nodemailer.auth.user;
const nodemailer_auth_pass = config.nodemailer.auth.pass;
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: nodemailer_auth_user,
    pass: nodemailer_auth_pass
  }
});

json_api_router.use(body_parser.urlencoded({ extended: true }));

json_api_router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

json_api_router.post('/sendmail', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const mailOptions = {
    from: '"Daniel Sosa" <danielsosa.foo@gmail.com>',
    to: 'danielsosa.dev@gmail.com',
    subject: 'Message from www.danielsosa.uy',
    text: `From: ${name} <${email}> - Phone: ${phone} - Message: ${message}`,
    html: `
        <h1>www.danielsosa.uy</h1>
        <h2>Mensaje:</h2>
        <p>From: <b>${name}</b></p>
        <p>Email: <b>${email}</b></p>
        <p>Phone: <b>${phone || ''}</b></p>
        <label>Content:</label>
        <p>${message}</p>
      `
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err, err.stack ? err.stack : '');
      res.status(500).json({});
    }
    else {
      res.status(200).json({});
    };
  });
});

module.exports = json_api_router;
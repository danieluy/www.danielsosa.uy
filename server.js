"use strict"
const fs = require('fs')
const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const home_router = require('./routers/home-router');
const json_api_router = require('./routers/json-api-router');
const session = require('express-session');

const config = require('./config.json');

//  Public folder  ////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

// Session Config. /////////////////////////////////////////////////////////////
const secret = config.session.secret;
const duration = config.session.durationHours;
const activeDuration = config.session.activeDurationHours;
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: false
  }
}))

app.use('/', home_router);
app.use('/api', json_api_router);

server.listen(3000, function () {
  console.log(
    '···········································\n' +
    '·                                         ·\n' +
    '·   Server listening on: localhost:3000   ·\n' +
    '·       Press Ctrl-C to terminate         ·\n' +
    '·                                         ·\n' +
    '···········································'
  );
});

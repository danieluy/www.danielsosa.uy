"use strict"
const fs = require('fs')
const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const sessions = require('client-sessions');
const home_router = require('./routers/home-router');
const json_api_router = require('./routers/json-api-router');

const config = require('./config.json');

//  Public folders  ////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

// Session Config. /////////////////////////////////////////////////////////////
const secret = config.session.secret;
const duration = config.session.durationHours;
const activeDuration = config.session.activeDurationHours;
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

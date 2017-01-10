"use strict";
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require("body-parser");
const headers = require('./headers.js');

// Body parser
router.use(bodyParser.urlencoded({ extended: false }))
// write CORS headers
router.use(headers.writeCORS);

// Hwo am I ////////////////////////////////////////////////////////////////////
router.get('/whoami', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/whoami/home.html'));
});

// 404 /////////////////////////////////////////////////////////////////////////

router.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = router;

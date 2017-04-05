"use strict";

const express = require('express');
const home_router = express.Router();
const path = require('path');

home_router.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = home_router;
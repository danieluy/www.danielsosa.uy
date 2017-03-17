'use strict';

require("../css/main.css");
require("../css/home.css");
const $events = require('./events');
const $data = require('./data');

document.addEventListener("DOMContentLoaded", function () {
  $data.init('home');
  $events.on('dataReady', $home.render.footer.bind($home));
  $home.init();
  window.addEventListener('resize', $home.setPageContentHeight.bind($home));
});

var $home = {
  init: function () {
    this.domCache();
  },
  domCache: function () {
    this.footer_template = document.getElementById('start-footer-template').innerHTML;
    this.footer = document.getElementById('start-footer');
    this.full_header = document.getElementById('full-header');
  },
  setPageContentHeight: function () {
    this.full_header.style.height = (window.innerHeight) + 'px';
  },
  render: {
    footer: function () {
      this.setPageContentHeight();
      this.footer.innerHTML = Mustache.to_html(this.footer_template, $data.getData.call($data, 'footer'));
    }
  }
}

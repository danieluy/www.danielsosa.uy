'use strict';

require("../css/main.css");
require("../css/home.css");
const $events = require('./events');
const $data = require('./data');

document.addEventListener("DOMContentLoaded", function() {
  $data.init('home');
  $events.on('dataReady', $home.render.footer.bind($home));
  $home.init();
});

var $home = {
  init: function(){
    this.domCache();
  },
  domCache: function(){
    this.footer_template = document.getElementById('start-footer-template').innerHTML;
    this.footer = document.getElementById('start-footer');
  },
  render: {
    footer: function(){
      this.footer.innerHTML = Mustache.to_html(this.footer_template, $data.getData.call($data, 'footer'));
    }
  }
}

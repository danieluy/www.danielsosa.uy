'use strict';

require("../css/main.css");
require("../css/dev.css");
const $events = require('./events');
const $data = require('./data');
const $nav = require('./nav');

document.addEventListener("DOMContentLoaded", function () {
  $data.init('dev');
  $events.on('dataReady', $dev.init.bind($dev));
  $events.on('dataReady', $nav.init.bind($nav));
  window.addEventListener('resize', $dev.setPageContentHeight.bind($dev));
});

var $dev = {
  page_templates: {},
  init: function () {
    $events.on('navigateToSubpage', this.render.subpage.bind(this));
    this.domCache();
  },
  domCache: function () {
    this.page_content = document.getElementById('page-content');
    var page_content_templates_aux = document.getElementsByClassName('page-content-template');
    for (var i = 0; i < page_content_templates_aux.length; i++) {
      this.page_templates[page_content_templates_aux[i].id.slice(1)] = page_content_templates_aux[i].innerHTML;
    }
  },
  setPageContentHeight: function () {
    this.page_content.style.height = (window.innerHeight - 60) + 'px';
  },
  render: {
    subpage: function (hash) {
      if (hash)
        this.page_content.innerHTML = Mustache.to_html(this.page_templates[hash.slice(1)], $data.getData.call($data, [hash.slice(1)]));
      else
        this.page_content.innerHTML = Mustache.to_html(this.page_templates.home, $data.getData.call($data, 'home'));
      this.setPageContentHeight();
    }
  }
}

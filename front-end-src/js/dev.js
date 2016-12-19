'use strict';

const dsAjax = require('./ds-ajax');
const $events = require('./events');
const $data = require('./data');
const $nav = require('./nav');
const $session = require('./session');

document.addEventListener("DOMContentLoaded", function() {
  $data.init();
  $events.on('dataReady', $dev.init.bind($dev));
  $events.on('dataReady', $nav.init.bind($nav));
});

var $dev = {
  page_templates: {},
  init: function(){
    $events.on('navigateToSubpage', this.render.subpage.bind(this));
    this.domCache();
  },
  domCache: function(){
    var page_content_templates_aux = document.getElementsByClassName('page-content-template');
    for (var i = 0; i < page_content_templates_aux.length; i++) {
      this.page_templates[ page_content_templates_aux[i].id.slice(1) ] = page_content_templates_aux[i].innerHTML;
    }
    this.page_content = document.getElementById('page-content');
  },
  render: {
    subpage: function(hash){
      if(hash)
        this.page_content.innerHTML = Mustache.to_html(this.page_templates[hash.slice(1)], $data.getData.call($data, [hash.slice(1)]));
      else
        this.page_content.innerHTML = Mustache.to_html(this.page_templates.home, $data.getData.call($data, 'home'));
    }
  }
}

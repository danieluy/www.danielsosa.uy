'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $nav.init();
  window.onhashchange = $nav.onHashChange.bind($nav);
});

var $nav = {
  init: function(){
    this.protocol = window.location.protocol + '//';
    this.host = window.location.host;
    this.pathname = window.location.pathname;
    this.hash = window.location.hash;
    this.navigateTo();
    $data.onData(this.onDataUpdate.bind(this));
  },
  domCache: function(){
    console.log('$nav.domCache()');
  },
  onHashChange: function(){
    this.hash = window.location.hash;
    this.navigateTo();
  },
  onDataUpdate: function(){
    this.navigateTo();
  },
  navigateTo: function(){
    if(this.hash !== '')
      $dev.render.subpage.call($dev, this.hash);
  }
}

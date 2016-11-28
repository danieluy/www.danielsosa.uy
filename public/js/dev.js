'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $dev.init();
});

var $dev = {
  init: function(){
    this.domCache();
    this.getData();
  },
  domCache: function(){
    this.nav_links_template = document.getElementById('dev-nav-links-template').innerHTML;
    this.nav_links = document.getElementById('dev-nav-links');
    this.footer_template = document.getElementById('start-footer-template').innerHTML;
    this.footer = document.getElementById('start-footer');
  },
  getData: function(lang){
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.data = JSON.parse(data);
        this.render();
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      },
      params: {
        page: 'dev',
        lang: lang
      }
    })
  },
  render: function(){
    this.nav_links.innerHTML = Mustache.to_html(this.nav_links_template, this.data.nav);
    this.footer.innerHTML = Mustache.to_html(this.footer_template, this.data.footer);
    $dev_nav.init();
  }
}

var $dev_nav = {
  nav_links: [],
  init: function(){
    this.domCache();
  },
  domCache: function(){
    var nav_links_aux = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav_links_aux.length; i++) {
      this.nav_links.push(nav_links_aux[i])
    }
    this.eventListeners();
  },
  eventListeners: function(){
    for (var i = 0; i < this.nav_links.length; i++) {
      this.nav_links[i].addEventListener('click', this.navigateTo.bind(this))
    }
  },
  navigateTo: function(e){
    console.log(e.target.getAttribute('href').slice(4));
  }
}

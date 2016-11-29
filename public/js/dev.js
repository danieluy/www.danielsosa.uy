'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $dev.init();
  $nav.init();
  window.onload = $nav.windowLoad.bind($nav);
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
    $nav.domCache();
  }
}

var $nav = {
  nav_links: [],
  init: function(){
    this.protocol = window.location.protocol + '//';
    this.host = window.location.host;
    this.pathname = window.location.pathname;
  },
  windowLoad: function(){
    if(window.location.pathname !== '/dev')
      this.navigateTo(null, window.location.pathname);
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
  navigateTo: function(e, pathname){
    if(e && e.preventDefault)
      e.preventDefault()
    if(pathname)
      window.location.assign(this.protocol + this.host + '/dev')
    var href = pathname || e.target.getAttribute('href');
    // it fails because when it reloads the whole state changes
    for (var i = 0; i < this.nav_links.length; i++) {
      if(this.nav_links[i].childNodes[1].getAttribute('href') === href)
        this.nav_links[i].classList.add('selected')
      else
        this.nav_links[i].classList.remove('selected')
    }
    dsAjax.post.call(this, {
      url: this.protocol + this.host + href,
      successCb: (function(data){
        console.log(data);
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      }
    })
    history.pushState({}, "", this.protocol + this.host + href);
  }
}

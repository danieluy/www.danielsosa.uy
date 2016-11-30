'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $dev.init();
  $nav.init();
  window.onload = $nav.onWindowLoad.bind($nav);
});

var $dev = {
  init: function(){
    this.domCache();
    this.getData();
  },
  domCache: function(){
    this.nav_links_template = document.getElementById('dev-nav-links-template').innerHTML;
    this.nav_links = document.getElementById('dev-nav-links');
    // this.footer_template = document.getElementById('start-footer-template').innerHTML;
    // this.footer = document.getElementById('start-footer');
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
    // this.footer.innerHTML = Mustache.to_html(this.footer_template, this.data.footer);
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
  domCache: function(){
    this.page_content = document.getElementById('page-content');
    this.page_content_template = document.getElementById('page-content-template').innerHTML;
    var nav_links_aux = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav_links_aux.length; i++) {
      this.nav_links.push(nav_links_aux[i])
    }
    this.eventListeners();
  },
  eventListeners: function(){
    for (var i = 0; i < this.nav_links.length; i++) {
      this.nav_links[i].addEventListener('click', this.onNavLinkClick.bind(this))
    }
  },
  onWindowLoad: function(){
    var pathname = window.location.pathname;
    if(pathname !== '/dev'){
      sessionStorage.setItem('pathname', pathname);
      window.location.href = this.protocol + this.host + '/dev';
    }
    else{
      pathname = sessionStorage.getItem('pathname');
      if(pathname !== '/dev'){
        history.pushState({}, "", this.protocol + this.host + pathname);
        // this.getPathData(pathname, function(data){console.log(data)});
        this.render();
        sessionStorage.setItem('pathname', '/dev');
      }
    }
  },
  onNavLinkClick: function(e){
    e.preventDefault()
    var href = e.target.getAttribute('href');
    this.highlightNavLink(href);
    // this.getPathData(href, function(data){console.log(data)});
    this.render();
    history.pushState({}, "", this.protocol + this.host + href);
  },
  highlightNavLink: function(href){
    for (var i = 0; i < this.nav_links.length; i++) {
      if(this.nav_links[i].childNodes[1].getAttribute('href') === href)
        this.nav_links[i].classList.add('selected')
      else
        this.nav_links[i].classList.remove('selected')
    }
  },
  getPathData: function(pathname, successCb){
    dsAjax.post.call(this, {
      url: this.protocol + this.host + pathname,
      successCb: (function(data){
        this.data = JSON.parse(data);// this is not necesary, the data has already been sent
        this.render();
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      }
    })
  },
  render: function(){
    if($dev.data)
      this.page_content.innerHTML = Mustache.to_html(this.page_content_template, $dev.data.work);
      // make this load after the data has been loaded
  }
}

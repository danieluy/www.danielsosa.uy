'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $data.init();
  $events.on('dataReady', $dev.init.bind($dev))
  $events.on('dataReady', $nav.init.bind($nav))
  window.onhashchange = $nav.onHashChange.bind($nav);
});

var $dev = {
  page_templates: {},
  init: function(){
    $events.on('navigateToSubpage', this.render.subpage.bind(this));
    this.domCache();
  },
  domCache: function(){

    // Automate this cache /////////////////////////////////////////////////////
    this.page_templates.work = document.getElementById('#work').innerHTML;
    this.page_templates.academic = document.getElementById('#academic').innerHTML;
    this.page_templates.contact = document.getElementById('#contact').innerHTML;
    ////////////////////////////////////////////////////////////////////////////
    $events.emit('pageTemplatesReady');

    this.nav_links_template = document.getElementById('dev-nav-links-template').innerHTML;
    this.nav_links = document.getElementById('dev-nav-links');
    this.page_content = document.getElementById('page-content');
    this.render.nav_links.call(this);

  },
  render: {
    nav_links: function(){
      this.nav_links.innerHTML = Mustache.to_html(this.nav_links_template, $data.getData.nav);
      $events.emit('navLinksReady');
    },
    subpage: function(hash){
      this.page_content.innerHTML = Mustache.to_html(this.page_templates[hash.slice(1)], $data.getData[hash.slice(1)]);
    }
  }
}

var $data = {
  init: function(){
    this.fetchData();
  },
  fetchData: function(lang){
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.getData = JSON.parse(data);
        $events.emit('dataReady', null);
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      },
      params: {
        page: 'dev',
        lang: lang
      }
    })
  }
}

var $nav = {
  page_content_templates: [],
  nav_links: [],
  init: function(){
    $events.on('navLinksReady', this.domCache.bind(this));
    $events.on('navigateToSubpage', this.highlightNavLink.bind(this));
    this.protocol = window.location.protocol + '//';
    this.host = window.location.host;
    this.pathname = window.location.pathname;
    this.hash = window.location.hash;
    this.navigateTo();
  },
  domCache: function(){
    this.page_content = document.getElementById('page-content');
    var nav_links_aux = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav_links_aux.length; i++) {
      this.nav_links.push(nav_links_aux[i])
    }
    this.domListeners();
  },
  domListeners: function(){
    for (var i = 0; i < this.nav_links.length; i++) {
      this.nav_links[i].addEventListener('click', this.onNavLinkClick.bind(this))
    }
  },
  onNavLinkClick: function(e){
    e.preventDefault()
    var href = e.target.getAttribute('href');
    history.pushState({}, "", this.protocol + this.host + href);
    $events.emit('navigateToSubpage', href.slice(4));
  },
  highlightNavLink: function(){
    console.log('highlightNavLink', this.hash);
    console.log('this.nav_links', this.nav_links);// this is never loaded !!!!!!!!!!!!!!!!!!!!!!
    for (var i = 0; i < this.nav_links.length; i++) {
      if(this.nav_links[i].childNodes[1].getAttribute('href') === this.hash)
        this.nav_links[i].classList.add('selected')
      else
        this.nav_links[i].classList.remove('selected')
    }
  },
  // onHashChange: function(){
  //   this.hash = window.location.hash;
  //   this.navigateTo();
  // },
  // onDataUpdate: function(){
  //   this.navigateTo();
  // },
  navigateTo: function(){
    if(this.hash !== '')
      $events.emit('navigateToSubpage', this.hash);
  }
}

'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $data.init();
  $events.on('dataReady', $dev.init.bind($dev))
  $events.on('dataReady', $nav.init.bind($nav))
  window.onhashchange = $nav.onHashChange.bind($nav);
});



var $session = {
  setItem: function(key, value){
    sessionStorage.setItem(key, value);
  },
  getItem: function(key){
    var value = sessionStorage.getItem(key);
    if(!value || value === 'undefined' || value === 'null')
      return null;
    else
      return value;
  }
}

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

var $nav = {
  li_nav_links: [],
  init: function(){
    $events.on('domCacheReady', this.render.li_nav_links.bind(this));
    $events.on('domCacheReady', this.domListeners.bind(this));
    $events.on('dataUpdated', this.render.li_nav_links.bind(this));
    $events.on('liNavLinksRenderReady', this.dinamicDomCache.bind(this));
    $events.on('dinamicDomCacheReady', this.dinamicDomListeners.bind(this));
    $events.on('dinamicDomCacheReady', this.onHashChange.bind(this));
    $events.on('navigateToSubpage', this.highlightNavLink.bind(this));
    $events.on('toggleLang', this.hideMenu.bind(this));
    this.protocol = window.location.protocol + '//';
    this.host = window.location.host;
    this.pathname = window.location.pathname;
    this.hash = window.location.hash;
    this.domCache();
  },
  domCache: function(){
    this.navbar = document.getElementById('navbar');
    this.menu_button = document.getElementById('menu-button');
    this.page_content = document.getElementById('page-content');
    this.nav_links_template = document.getElementById('dev-nav-links-template').innerHTML;
    this.ul_nav_links = document.getElementById('dev-nav-links');
    this.ul_nav_links_back = document.getElementById('dev-nav-links-back');

    $events.emit('domCacheReady');
  },
  domListeners: function(){
    this.page_content.addEventListener('scroll', this.elevateNavbar.bind(this));
    this.menu_button.addEventListener('click', this.displayMenu.bind(this));
    this.ul_nav_links_back.addEventListener('click', this.hideMenu.bind(this));
  },
  dinamicDomCache: function(){
    var nav_links_aux = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav_links_aux.length; i++) {
      this.li_nav_links.push(nav_links_aux[i])
    }
    $events.emit('dinamicDomCacheReady');
  },
  dinamicDomListeners: function(){
    for (var i = 0; i < this.li_nav_links.length; i++)
      this.li_nav_links[i].addEventListener('click', this.onNavLinkClick.bind(this));
  },
  elevateNavbar: function(e){
    if(e.target.scrollTop > 0)
      this.navbar.classList.add('elevate');
    else
      this.navbar.classList.remove('elevate');
  },
  displayMenu: function(e){
    if(window.screen.width < 960){
      this.ul_nav_links.classList.add('slideLeft');
      this.ul_nav_links_back.classList.add('slideLeft');
    }
  },
  hideMenu: function(){
    if(window.screen.width < 960){
      this.ul_nav_links.classList.remove('slideLeft');
      this.ul_nav_links_back.classList.remove('slideLeft');
    }
  },
  onNavLinkClick: function(e){
    e.preventDefault()
    var href = e.target.getAttribute('href');
    history.pushState({}, "", this.protocol + this.host + href);
    $events.emit('navigateToSubpage', href.slice(4));
    if(window.screen.width < 960)
      this.hideMenu();
  },
  onHashChange: function(){
    this.hash = window.location.hash;
    $events.emit('navigateToSubpage', this.hash);
  },
  highlightNavLink: function(hash){
    for (var i = 0; i < this.li_nav_links.length; i++) {
      if(this.li_nav_links[i].childNodes[1].getAttribute('href').slice(4) === hash)
        this.li_nav_links[i].classList.add('selected')
      else
        this.li_nav_links[i].classList.remove('selected')
    }
  },
  render: {
    li_nav_links: function(){
      this.ul_nav_links.innerHTML = Mustache.to_html(this.nav_links_template, $data.getData.call($data, 'nav'));
      $events.emit('liNavLinksRenderReady');
    }
  }
}

var $data = {
  init: function(){
    this.lang = $session.getItem('selected_lang') || 'es';
    $events.on('liNavLinksRenderReady', this.dinamicDomCache.bind(this));
    this.initData();
  },
  dinamicDomCache: function(){
    this.langToggler = document.getElementById('btn-toggle-lang');
    this.dinamicDomListeners();
  },
  dinamicDomListeners: function(){
    this.langToggler.addEventListener('click', this.toggleLang.bind(this));
  },
  toggleLang: function(){
    if(this.lang === 'en')
      this.lang = 'es';
    else
      this.lang = 'en';
    $session.setItem('selected_lang', this.lang);
    this.updateData();
    $events.emit('toggleLang');
  },
  initData: function(){
    console.log('initData', this.lang);
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.data = JSON.parse(data);
        console.log(this.data);
        $events.emit('dataReady');
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      },
      params: {
        page: 'dev',
        lang: this.lang
      }
    })
  },
  updateData: function(){
    console.log('updateData', this.lang);
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.data = JSON.parse(data);
        console.log(this.data);
        $events.emit('dataUpdated');
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      },
      params: {
        page: 'dev',
        lang: this.lang
      }
    })
  },
  getData: function(section){
    return this.data[section];
  }
}

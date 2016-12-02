'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $data.init();
  $events.on('dataReady', $nav.init.bind($nav))
  $events.on('dataReady', $dev.init.bind($dev))
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
    this.page_content = document.getElementById('page-content');
  },
  render: {
    subpage: function(hash){
      this.page_content.innerHTML = Mustache.to_html(this.page_templates[hash.slice(1)], $data.getData[hash.slice(1)]);
    }
  }
}

var $nav = {
  li_nav_links: [],
  init: function(){
    this.protocol = window.location.protocol + '//';
    this.host = window.location.host;
    this.pathname = window.location.pathname;
    this.hash = window.location.hash;
    this.domCache();
    $events.on('navigateToSubpage', this.highlightNavLink.bind(this))
  },
  domCache: function(){
    this.nav_links_template = document.getElementById('dev-nav-links-template').innerHTML;
    this.ul_nav_links = document.getElementById('dev-nav-links');
    this.render.li_nav_links.call(this);
  },
  dinamicDomCache: function(){
    var nav_links_aux = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav_links_aux.length; i++) {
      this.li_nav_links.push(nav_links_aux[i])
    }
    this.dinamicDomListeners();
  },
  dinamicDomListeners: function(){
    for (var i = 0; i < this.li_nav_links.length; i++)
      this.li_nav_links[i].addEventListener('click', this.onNavLinkClick.bind(this));
  },
  onNavLinkClick: function(e){
    e.preventDefault()
    var href = e.target.getAttribute('href');
    history.pushState({}, "", this.protocol + this.host + href);
    $events.emit('navigateToSubpage', href.slice(4));
  },
  onHashChange: function(){
    this.hash = window.location.hash;
    $events.emit('navigateToSubpage', this.hash);
  },
  highlightNavLink: function(hash){// fix this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (var i = 0; i < this.li_nav_links.length; i++) {
      if(this.li_nav_links[i].childNodes[1].getAttribute('href') === hash)
        this.li_nav_links[i].classList.add('selected')
      else
        this.li_nav_links[i].classList.remove('selected')
    }
  },
  render: {
    li_nav_links: function(){
      this.ul_nav_links.innerHTML = Mustache.to_html(this.nav_links_template, $data.getData.nav);
      this.dinamicDomCache.call(this);
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

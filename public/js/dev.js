'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $dev.init();
  $data.init();
});

var $dev = {
  page_templates: {},
  init: function(){
    this.domCache();
    $data.onData(this.onDataUpdated.bind(this));
  },
  domCache: function(){
    this.nav_links_template = document.getElementById('dev-nav-links-template').innerHTML;
    this.nav_links = document.getElementById('dev-nav-links');
    this.page_content = document.getElementById('page-content');
    this.page_templates.work = document.getElementById('#work').innerHTML;
  },
  onDataUpdated: function(data){
    this.data = data;
    console.log('this.data', this.data);
  },
  render: {
    nav_links: function(){
      this.nav_links.innerHTML = Mustache.to_html(this.nav_links_template, this.data.nav);
      $nav.domCache();
    },
    subpage: function(hash){
      console.log('subpage hash', hash);
      this.page_content.innerHTML = Mustache.to_html(this.page_templates[hash.slice(1)], this.data[hash.slice(1)]);
    }
  }
}

var $data = {
  subscriptors: [],
  init: function(){
    this.fetchData();
  },
  fetchData: function(lang){
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.data = JSON.parse(data);
        this.notifySubscribers();
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
  notifySubscribers: function(){
    for (var i = 0; i < this.subscriptors.length; i++)
      this.subscriptors[i](this.data);
  },
  onData: function(cb){
    this.subscriptors.push(cb);
  }
}

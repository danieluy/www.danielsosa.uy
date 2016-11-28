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
        console.log(this.data);
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
  }
}

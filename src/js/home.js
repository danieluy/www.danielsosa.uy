'use strict';

document.addEventListener("DOMContentLoaded", function() {
  $home.init();
});

var $home = {
  init: function(){
    this.domCache();
    this.getData();
  },
  domCache: function(){
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
        page: 'home',
        lang: lang
      }
    })
  },
  render: function(){
    this.footer.innerHTML = Mustache.to_html(this.footer_template, this.data.footer);
  }
}

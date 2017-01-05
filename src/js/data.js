const $events = require('./events');
const $session = require('./session');
const dsAjax = require('./ds-ajax');

module.exports = {
  init: function(page){
    this.lang = $session.getItem('selected_lang') || 'es';
    $events.on('liNavLinksRenderReady', this.dinamicDomCache.bind(this));
    this.initData(page);
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
  initData: function(page){
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.data = JSON.parse(data);
        $events.emit('dataReady');
      }).bind(this),
      errorCb: function(err){
        console.error(err);
      },
      params: {
        page: page,
        lang: this.lang
      }
    })
  },
  updateData: function(){
    dsAjax.post.call(this, {
      url: 'http://' + window.location.host + '/lang',
      successCb: (function(data){
        this.data = JSON.parse(data);
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

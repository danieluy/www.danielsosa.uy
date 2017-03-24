import request from 'request';

export default {

  lang: function(lang, page, cb){
    request.post(`http://localhost:3372/lang/${lang}/${page}`, {}, cb)
  }

}
module.exports = {
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

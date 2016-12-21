'use strict';

module.exports = {
  events: {},
  on: function (event_name, callback) {
    this.events[event_name] = this.events[event_name] || [];
    this.events[event_name].push(callback);
  },
  off: function(event_name, callback) {
    if (this.events[event_name]) {
      this.events[event_name] = this.events[event_name].filter(function(evtCb){
        return callback.toString() !== evtCb.toString()
      })
    }
  },
  emit: function (event_name, data) {
    if(event_name === 'domCacheReady' || event_name === 'dataReady' || event_name === 'dataUpdated')console.log('emit', event_name);
    if (this.events[event_name]) {
      this.events[event_name].forEach(function(callback) {
        callback(data);
      });
    }
  }
}

'use strict';

var $events = {
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
    if (this.events[event_name]) {
      this.events[event_name].forEach(function(callback) {
        callback(data);
      });
    }
  }
};

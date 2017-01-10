require('../../css/whoami/main.css');

document.addEventListener("DOMContentLoaded", function(event) {
  $main.init();
});

var $main = {
  init: function(){
    document.getElementsByTagName('button')[0].addEventListener('click', this.emitMessage.bind(this));
  },
  emitMessage: function(){
    console.log(this);
    socket.emit('message', 'message from front end')
  }
}

module.exports = $main;

var $ = window.jQuery = window.$ = require('jquery');
var Backbone = require('backbone');

require('./router');

//waits for DOM to be ready

$(function(){
  //triggers router
  Backbone.history.start();
});

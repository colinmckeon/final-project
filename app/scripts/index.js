var $ = window.jQuery = window.$ = require('jquery');
var Backbone = require('backbone');
require('bootstrap-sass/assets/javascripts/bootstrap.min.js');

require('./router');



$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Mashape-Key", "64ygDWoKx7mshue5RJgLaVom1n5lp12Bzfejsnkr3S0j0ATb5P");
    xhr.setRequestHeader("Accept", "application/json");
  }
});



//waits for DOM to be ready
$(function(){
  //triggers router
  Backbone.history.start();

});

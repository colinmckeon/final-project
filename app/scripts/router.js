var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

//Local require
var setupParse = require('./parseUtilities').setupParse;
var LogInContainer = require('./components/login.jsx').LogInContainer;
var CreateUserContainer = require('./components/createuser.jsx').CreateUserContainer;

var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      'newUser/': 'newUser'
    },
    initialize: function(){
      setupParse('overwatch', 'harambe');
      $.ajaxSetup({
        beforeSend: function(xhr){
          console.log('beforeSend mash');
          xhr.setRequestHeader("X-Mashape-Key", "64ygDWoKx7mshue5RJgLaVom1n5lp12Bzfejsnkr3S0j0ATb5P");
          xhr.setRequestHeader("Accept", "application/json");

        }
      });

      // console.log($.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/'));

    $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover').then(function(data){
      console.log(data);
    });

    },
    login: function(){
      ReactDOM.render(
        React.createElement(LogInContainer),
        document.getElementById('app')
      );
    },
    newUser: function(){
      ReactDOM.render(
        React.createElement(CreateUserContainer),
        document.getElementById('app')
      );
    }
});

var router = new AppRouter();

module.exports = router;

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
      setupParse('genji', 'junkrat');
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

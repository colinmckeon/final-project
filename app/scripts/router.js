var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

//Local require
var setupParse = require('./parseUtilities').setupParse;
var LogInContainer = require('./components/login.jsx').LogInContainer;
var CreateUserContainer = require('./components/createuser.jsx').CreateUserContainer;
var UserProfileContainer = require('./components/userProfile.jsx').UserProfileContainer;

var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      'newUser/': 'newUser',
      'userProfile': 'userProfile'
    },

    initialize: function(){
      setupParse('genji', 'junkrat');
    },
    login: function(){
      ReactDOM.render(
        React.createElement(LogInContainer, {router:this}),
        document.getElementById('app')
      );
    },
    newUser: function(){
      ReactDOM.render(
        React.createElement(CreateUserContainer),
        document.getElementById('app')
      );
    },
    userProfile: function(){
      ReactDOM.render(
        React.createElement(UserProfileContainer),
        document.getElementById('app')
      );
    }
});

var router = new AppRouter();

module.exports = router;

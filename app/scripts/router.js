var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

//Local require
var setupParse = require('./parseUtilities').setupParse;
var LogInContainer = require('./components/login.jsx').LogInContainer;
var CreateUserContainer = require('./components/createuser.jsx').CreateUserContainer;
var ChooseGameContainer = require('./components/chooseGame.jsx').ChooseGameContainer;
var UserProfileContainer = require('./components/userProfile.jsx').UserProfileContainer;
var CreateSquadContainer = require('./components/createSquad.jsx').CreateSquadContainer;

var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      'newUser/': 'newUser',
      'chooseGame/': 'chooseGame',
      'userProfile/': 'userProfile',
      'createSquad/': 'createSquad'
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
        React.createElement(CreateUserContainer, {router:this}),
        document.getElementById('app')
      );
    },
    chooseGame: function(){
      ReactDOM.render(
        React.createElement(ChooseGameContainer),
        document.getElementById('app')
      );
    },
    userProfile: function(){
      ReactDOM.render(
        React.createElement(UserProfileContainer),
        document.getElementById('app')
      );
    },
    createSquad: function(){
      ReactDOM.render(
        React.createElement(CreateSquadContainer),
        document.getElementById('app')
      );
    }
});

var router = new AppRouter();

module.exports = router;

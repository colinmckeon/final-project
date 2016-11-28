var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

//Local require

var setupParse = require('./parseUtilities').setupParse;
var LogInContainer = require('./components/login.jsx').LogInContainer;
var CreateUserContainer = require('./components/createUser.jsx').CreateUserContainer;
var ChooseGameContainer = require('./components/chooseGame.jsx').ChooseGameContainer;
var UserProfileContainer = require('./components/userProfile.jsx').UserProfileContainer;
var CreateSquadContainer = require('./components/createSquad.jsx').CreateSquadContainer;
var FindSquadContainer = require('./components/findSquad.jsx').FindSquadContainer;
var MyCurrentSquadContainer = require('./components/myCurrentSquad.jsx').MyCurrentSquadContainer;
var ProfileSettingsContainer = require('./components/profileSettings.jsx').ProfileSettingsContainer;


var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      'newUser/': 'newUser',
      'chooseGame/': 'chooseGame',
      'userProfile/:id': 'userProfile',
      'profileSettings/': 'profileSettings',

      'games/:gameId/squads/': 'findSquad',
      // 'createSquad/': 'createSquad',
      'games/:gameId/squads/create/': 'createSquad',

      'findSquad/:id/': 'createJoinGroup'
      // 'findSquad/': 'findSquad'
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
        React.createElement(ChooseGameContainer, {router:this}),
        document.getElementById('app')
      );
    },
    userProfile: function(){
      ReactDOM.render(
        React.createElement(UserProfileContainer),
        document.getElementById('app')
      );
    },
    profileSettings: function(){
      ReactDOM.render(
        React.createElement(ProfileSettingsContainer),
        document.getElementById('app')
      );
    },
    createSquad: function(gameId){
      ReactDOM.render(
        React.createElement(CreateSquadContainer, {router:this, gameId: gameId}),
        document.getElementById('app')
      );
    },
    findSquad: function(gameId){
      ReactDOM.render(
        React.createElement(FindSquadContainer, {router:this, gameId: gameId}),
        document.getElementById('app')
      );
    },
    createJoinGroup: function(squadId){
      ReactDOM.render(
        React.createElement(MyCurrentSquadContainer, {squadId: squadId}),
        document.getElementById('app')
      );
    }
});

var router = new AppRouter();

module.exports = router;

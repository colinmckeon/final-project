var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var LogInContainer = require('./components/login.jsx').LogInContainer;
var CreateUserContainer = require('./components/createuser.jsx').CreateUserContainer;

var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login'
    },
    login: function(){
      ReactDOM.render(
        React.createElement(CreateUserContainer),
        document.getElementById('app')
      );
    }
});

var router = new AppRouter();

module.exports = router;

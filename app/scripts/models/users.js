var Backbone = require('backbone');
var setupParse = require('../parseUtilities.js').setupParse;

var User = Backbone.Model.extend({
  defaults: {
    email: '',
    password: ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://colinmck14.herokuapp.com/users',
  parse: function(data){
    return data.results;
  },
  logIn: function(email, password){
    var self = this;
    var loginUrl = 'https://colinmck14.herokuapp.com/' + 'login?username=' + encodeURI(email) + '&password=' + encodeURI(password);

    $.ajax(loginUrl).then(function(response){
      self.set(response)
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
      // Backbone.history.navigate('', {trigger: true});
    })
  },
  signUp: function(){
    var self = this;
    var email = this.get('email');
    var password = this.get('password');

    this.save().then(function(data){
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
    });
  }
});


module.exports = {
  User: User
}

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
  logIn: function(email, password, router){
    var self = this;
    var loginUrl = 'https://colinmck14.herokuapp.com/' + 'login?username=' + encodeURI(email) + '&password=' + encodeURI(password);

    $.ajax(loginUrl).then(function(response){
      self.set(response)
      console.log(response);
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
      router.navigate('userProfile/', {trigger: true});
    })
  },
  signUp: function(router){
    var self = this;

    this.save().then(function(data){
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
      router.navigate('', {trigger: true});
    });
  }
});


module.exports = {
  User: User
}

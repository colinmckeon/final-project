var Backbone = require('backbone');
var setupParse = require('../parseUtilities.js').setupParse;

var User = Backbone.Model.extend({
  defaults: {
    email: '',
    password: ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://colinmck.herokuapp.com/users',
  parse: function(data){
    return data.results;
  },
  logIn: function(email, password){
    // console.log(this.urlRoot);
    var loginUrl = 'https://colinmck.herokuapp.com/' + 'login?email=' + encodeURI(email) + '&password=' + encodeURI(password);

    $.ajax(loginUrl).then(function(response){
      localStorage.setItem('token', response.sessionToken);
      // Backbone.history.navigate('', {tigger: true});
    })
  },
  signUp: function(){
    var self = this;
    var email = this.get('email');
    var password = this.get('password');

    this.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
    });
  }
});


module.exports = {
  User: User
}

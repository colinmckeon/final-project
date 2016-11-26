var Backbone = require('backbone');
var setupParse = require('../parseUtilities.js').setupParse;

var User = Backbone.Model.extend({
  defaults: {
    email: '',
    password: ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://colinmck14.herokuapp.com/users',
  // parse: function(data){
  //   return data.results;
  // },
  userAuth: function(){
    setupParse('genji', 'junkrat', this.get('sessionToken'));
    return this;
  },
  logIn: function(email, password, router){
    var self = this;
    var loginUrl = 'https://colinmck14.herokuapp.com/' + 'login?username=' + encodeURI(email) + '&password=' + encodeURI(password);

    $.ajax(loginUrl).then(function(response){
      self.set(response)
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
      router.navigate('chooseGame/', {trigger: true});
    })
  },
  signUp: function(router){
    var self = this;

    this.save().then(function(data){
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
      router.navigate('', {trigger: true});
    });
  },
  save: function(attributes, options){
    delete this.attributes.createdAt;
    delete this.attributes.updatedAt;

    return Backbone.Model.prototype.save.apply(this, arguments);
  }
},{
  //retrieving user info from localStorage
  current: function(){
    var userData = JSON.parse(localStorage.getItem('user'));
    return new User(userData);
  }
});


module.exports = {
  User: User
}

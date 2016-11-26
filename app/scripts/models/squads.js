var Backbone = require('backbone');
var User = require('./users.js').User;


var CreateSquadModel = Backbone.Model.extend({
  defaults: {
    players: '',
    message: '',
    creator: {}
  },
  idAttribute: 'objectId',
  urlRoot: 'https://colinmck14.herokuapp.com/classes/Squads/'

});

var CreateSquadCollection = Backbone.Collection.extend({
  model: CreateSquadModel,
  url: 'https://colinmck14.herokuapp.com/classes/Squads/'
});


var SquadMemberCollection = Backbone.Collection.extend({
  model: User,
  url: function(){
    return 'https://colinmck14.herokuapp.com/users/?where={"squad": {"__type": "Pointer", "className": "Squads", "objectId": "'+ this.squadId +'"}}'
  },
  parse: function(response){
    return response.results;
  }
});

module.exports = {
  CreateSquadCollection: CreateSquadCollection,
  CreateSquadModel: CreateSquadModel,
  SquadMemberCollection: SquadMemberCollection
}

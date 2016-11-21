var Backbone = require('backbone');

var CreateSquadModel = Backbone.Model.extend({
  defaults: {
    players: '',
    message: ''
  },
  idAttribute: 'objectId'
});

var CreateSquadCollection = Backbone.Collection.extend({
  model: CreateSquadModel,
  url: 'https://colinmck14.herokuapp.com/classes/Squads'
});

module.exports = {
  CreateSquadCollection: CreateSquadCollection
}

var Backbone = require('backbone');

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

module.exports = {
  CreateSquadCollection: CreateSquadCollection,
  CreateSquadModel: CreateSquadModel
}

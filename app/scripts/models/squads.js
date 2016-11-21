var Backbone = require('backbone');

var CreateSquadModel = Backbone.Model.extend({
  defaults: {
    players: '',
    message: ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://colinmck14.herokuapp.com/squads',
});

module.exports = {
  CreateSquadModel: CreateSquadModel
}

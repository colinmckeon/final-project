var Backbone = require('backbone');

var Game = Backbone.Model.extend({

});

var GameCollection = Backbone.Collection.extend({
  model: Game,
  url: 'https://colinmck14.herokuapp.com/classes/Games',
  parse: function(data){
    return data.results;
  }
});



module.exports = {
  Game: Game,
  GameCollection: GameCollection
}

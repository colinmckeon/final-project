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



// // $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover&search=overwatch,diablo,minecraft,smite:desc:min&limit=50').then(function(data){
// // console.log(data);



module.exports = {
  Game: Game,
  GameCollection: GameCollection
}

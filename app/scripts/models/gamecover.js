var Backbone = require('backbone');


var GameCoverArt = Backbone.Model.extend({

});

var GameCoverArtCollection = Backbone.Collection.extend({
  model: GameCoverArt,
  url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover'
});



// $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover').then(function(data){
// console.log(data);


module.exports = {
  GameCoverArtCollection: GameCoverArtCollection
}

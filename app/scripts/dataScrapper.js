var self = this;
var allGames = []; // array to hold all the games

$.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover&search=overwatch,diablo,minecraft,smite:desc:min&limit=50')
  .then(function(data){
    //console.log(data);
    // self.setState({collection: data})
    data.forEach(function(game){
      allGames.push(game)
    });

    $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover&search=dota,rocketleague,worldofwarcraft,hearthstone:desc:min&limit=50')
      .then(function(data) {
        console.log('2nd fetch', data);
        data.forEach(function(game){
          allGames.push(game)
        });
        // self.collection.push(data)
        self.setState({collection: allGames});
      });

});

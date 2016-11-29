var Backbone = require('backbone');

var XboxOneGame = Backbone.Model.extend({
  idAttribute: 'objectId'
});


var XboxOneGameCollection = Backbone.Collection.extend({
  model: XboxOneGame,
  url: '',
  xboxSetup: function(){
      $.ajaxSetup({
        beforeSend: function(xhr){
          xhr.setRequestHeader("X-Auth", 'c407153a0eb4d99cca60cfdd4d04351143907988');
        }
      });

  },
  xboxGamesSetup: function(xuid, callback){
    // var member = JSON.parse(localStorage.getItem('user'));
    var self = this;

    this.xboxSetup();

    $.ajax('https://xboxapi.com/v2/' + xuid + '/xboxonegames/').then(function(response){
      self.set(response.titles);

        callback();

    })

    return this;
  },
});


module.exports = {
  XboxOneGameCollection: XboxOneGameCollection
}

var Backbone = require('backbone');

var setupParse = require('../parseUtilities.js').setupParse;


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
    var self = this;

    this.xboxSetup();

    // $.ajax('https://xboxapi.com/v2/' + xuid + '/xboxonegames/').then(function(response){
    //   self.set(response.titles);
    //
    //   setupParse('genji', 'junkrat');
    //
    //     callback();
    //
    // })

    return this;
  },
});


module.exports = {
  XboxOneGameCollection: XboxOneGameCollection
}

var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var User = require('../models/users.js').User;
var XboxOneGameCollection = require('../models/xboxApi.js').XboxOneGameCollection;


var UserProfile = React.createClass({
  render: function(){
    var total = this.props.gameCollection.length;
    var half = Math.floor(total/2);

    var leftGames = this.props.gameCollection.slice(0, half).map(function(game){
      return(
        <li id="listedGame" key={game.cid}>{game.get('name')}</li>
      )
    });

    var rightGames = this.props.gameCollection.slice(half, total).map(function(game){
      return(
        <li id="listedGame" key={game.cid}>{game.get('name')}</li>
      )
    });
    return (
      <div>

        <div className="row">
          <div className="col-md-3 col-md-offset-1">
            <div id="avatarHolder">
               <img src={this.props.user.get('avatar')} id="avatarUserProfile"></img>
            </div>
          </div>


          <div className="col-md-8">
            <div className="qusernameGamertagHolder">
              <h1 id="profileQusername">{this.props.user.get('qusername')}</h1>
              <h5 id="gamertagLabel">XBOX Live Gamertag: </h5> &nbsp;
              <h5 id="profileGamertag">{this.props.user.get('gamertag')}</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <div id="gamesPlayedByUser">
              <h5 id="mostPlayedGamesLabel">Games played by {this.props.user.get('qusername')}</h5>
              <ul>
                {leftGames}
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div id="gamesPlayedByUser">
              <h5 id="mostPlayedGamesLabel">Games played by {this.props.user.get('qusername')}</h5>
              <ul>
                {rightGames}
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
})

var UserProfileContainer = React.createClass({
  getInitialState: function(){
    return{
      user: new User(),
      gameCollection: new XboxOneGameCollection()
    }
  },
  componentWillMount: function(){
    var gameCollection = this.state.gameCollection;
    var self = this;
    var user = this.state.user

      user.set('objectId', this.props.userId).fetch().then(function(){
      self.setState({user: user});

      gameCollection.xboxGamesSetup(user.get('xuid'), function(){
        var appsRemoved = gameCollection.filter(function(apps){
          return apps.get('titleType') == 'LiveApp';
        });
        gameCollection.remove(appsRemoved);

        // var reducedCollection = gameCollection.slice(0, 10);

        self.setState({gameCollection: gameCollection});
      });
    });


  },
  render: function(){
    return (
      <div>
        <Template>
          <div className="container">

              <UserProfile
                user={this.state.user}
                gameCollection={this.state.gameCollection}
                />

          </div>
        </Template>
      </div>
    );
  }
});


module.exports = {
  UserProfileContainer: UserProfileContainer
}

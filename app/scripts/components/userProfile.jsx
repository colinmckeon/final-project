var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var User = require('../models/users.js').User;
var XboxOneGameCollection = require('../models/xboxApi.js').XboxOneGameCollection;


var UserProfile = React.createClass({
  render: function(){
    var gameName = this.props.gameCollection.map(function(game){
      return(
        <li key={game.cid}>{game.get('name')}</li>
      )
    });
    return (
      <div>

        <div className="col-md-3 col-md-offset-1">
          <div>
            <div className="profilePictureHolder">
               <img src={this.props.user.get('avatar')}></img>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="qusernameGamertagHolder">
            <h1 id="profileQusername">{this.props.user.get('qusername')}</h1>
            <h5 id="gamertagLabel">XBOX Live Gamertag: </h5> &nbsp;
            <h5 id="profileGamertag">{this.props.user.get('gamertag')}</h5>
          </div>
          <div>
            <h5 id="mostPlayedGamesLabel">Most Played Games:</h5>
            <ul>
              {gameName}
            </ul>
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
      self.setState({user: user})
    });

    gameCollection.xboxGamesSetup(xuid, function(){
      var appsRemoved = gameCollection.filter(function(apps){
        return apps.get('titleType') == 'LiveApp';
      });
      gameCollection.remove(appsRemoved);

      var reducedCollection = gameCollection.slice(0, 10);

      self.setState({gameCollection: reducedCollection});
    });
  },
  render: function(){
    return (
      <div>
        <Template />
          <div className="container">
            <div className="row">
              <UserProfile
                user={this.state.user}
                gameCollection={this.state.gameCollection}
                />
            </div>
          </div>
      </div>
    );
  }
});


module.exports = {
  UserProfileContainer: UserProfileContainer
}

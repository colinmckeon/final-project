var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var User = require('../models/users.js').User;


var UserProfile = React.createClass({
  render: function(){
    console.log(this.props.user);
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
              <li className="profileGamesList">GAME #1</li>
              <li className="profileGamesList">GAME #2</li>
              <li className="profileGamesList">GAME #3</li>
              <li className="profileGamesList">GAME #4</li>
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
      user: User.current()
    }
  },
  render: function(){
    console.log(this.state.user);
    return (
      <div>
        <Template />
          <div className="container">
            <div className="row">
              <UserProfile user={this.state.user}/>
            </div>
          </div>
      </div>
    );
  }
});


module.exports = {
  UserProfileContainer: UserProfileContainer
}

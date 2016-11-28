var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;


var UserProfile = React.createClass({
  render: function(){
    return (
      <div>

        <div className="col-md-3 col-md-offset-1">
          <div>
            <div className="profilePictureHolder">
               <h5>PROFILE PICTURE UPLOAD GOES HERE</h5>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="qusernameGamertagHolder">
            <h1 id="profileQusername">QUSERNAME GOES HERE</h1>
            <h5 id="gamertagLabel">XBOX Live Gamertag: </h5> &nbsp;
            <h5 id="profileGamertag">GAMERTAG GOES HERE</h5>
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
  render: function(){
    return (
      <div>
        <Template />
          <div className="container">
            <div className="row">
              <UserProfile/>
            </div>
          </div>
      </div>
    );
  }
});


module.exports = {
  UserProfileContainer: UserProfileContainer
}

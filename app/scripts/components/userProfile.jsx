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
            <h4 id="gamertagLabel">XBOX Live Gamertag: </h4> &nbsp;
            <h4 id="profileGamertag">GAMERTAG GOES HERE</h4>
          </div>
          <div>
            <h5>Most Played Games:</h5>
            <ul>
              <li>GAME #1</li>
              <li>GAME #2</li>
              <li>GAME #3</li>
              <li>GAME #4</li>
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

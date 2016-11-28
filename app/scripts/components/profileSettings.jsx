var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var FileModel = require('../models/fileUpload.js').File;

var ProfileSettings = React.createClass({
  render: function(){
    return (
      <div>

        <div className="col-md-3 col-md-offset-1">
          <div>
            <div className="profilePictureHolder">
              <form id="profile" action="/dist/" method="POST" encType="multipart/form-data">
                <input type="file" id="pic" name="pic"/>

                <br/>
                <br/>

                <input type="submit"/>
              </form>
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
});



var ProfileSettingsContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <ProfileSettings />
      </div>
    );
  }
});

module.exports = {
  ProfileSettingsContainer: ProfileSettingsContainer
}

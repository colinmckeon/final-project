var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var FileModel = require('../models/fileUpload.js').File;
var User = require('../models/users.js').User;

var ProfileSettings = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;

    this.props.avatar.save().then(function(response){
      self.props.user.set('avatar', response.url);
      self.props.user.userAuth().save();
      localStorage.setItem('user', JSON.stringify(self.props.user.toJSON()));

      Backbone.history.navigate('userProfile/' + self.props.user.get('objectId'), {trigger: true})

    })
  },
  handleAvatar: function(e){
    e.preventDefault();

    var attachedAvatar = e.target.files[0];
    var avatar = this.props.avatar;

    avatar.set('data', attachedAvatar);

    this.setState({avatar: avatar});

  },
  render: function(){
    return (
      <div>

        <div className="col-md-3 col-md-offset-1">
          <div>

            <div className="profilePictureHolder">
              <form onSubmit={this.handleSubmit} id="avatarForm" action="/dist/" method="POST" encType="multipart/form-data">
                <input onChange={this.handleAvatar} type="file" id="avatar" name="avatar"/>
                <br/>
                <br/>
                <input type="submit"/>
              </form>
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
});



var ProfileSettingsContainer = React.createClass({
  getInitialState: function(){
    var avatar = new FileModel();
    return{
      'avatar': avatar,
      user: User.current()
    }
  },
  render: function(){
    return (
      <div>
        <Template />
        <ProfileSettings
          avatar={this.state.avatar}
          user={this.state.user}
          />
      </div>
    );
  }
});

module.exports = {
  ProfileSettingsContainer: ProfileSettingsContainer
}

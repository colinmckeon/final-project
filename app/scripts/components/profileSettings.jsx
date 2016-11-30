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

        <div className="row">
          <div className="col-md-3 col-md-offset-1 alignmentProfilePictureHolder">
              <div className="profilePictureHolder">
                <span id="uploadAvatarIcon"><i className="fa fa-plus-square" aria-hidden="true"></i></span>
                <form onSubmit={this.handleSubmit} id="avatarForm" action="/dist/" method="POST" encType="multipart/form-data">
                  <input onChange={this.handleAvatar} type="file" id="avatar" name="avatar"/>
                  <input id="avatarSubmitButton" className="btn" type="submit"/>
                </form>
                <h4 id="uploadAvatarCaption">Upload Profile Image <i className="fa fa-hand-o-up" aria-hidden="true"></i></h4>
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
          <div className="col-md-4 col-md-offset-4">
            <h5 id="mostPlayedGamesLabel">Games played by {this.props.user.get('qusername')}</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <div className="gamesPlayedByUser">
              <ul>
                <li className="profileGamesList">GAME #1</li>
                <li className="profileGamesList">GAME #2</li>
                <li className="profileGamesList">GAME #3</li>
                <li className="profileGamesList">GAME #4</li>
                <li className="profileGamesList">GAME #5</li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div className="gamesPlayedByUser">
              <ul>
                <li className="profileGamesList">GAME #6</li>
                <li className="profileGamesList">GAME #7</li>
                <li className="profileGamesList">GAME #8</li>
                <li className="profileGamesList">GAME #9</li>
                <li className="profileGamesList">GAME #10</li>
              </ul>
            </div>
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
        <Template>

          <div className="container">

            <ProfileSettings
              avatar={this.state.avatar}
              user={this.state.user}
              />

          </div>

        </Template>
      </div>
    );
  }
});

module.exports = {
  ProfileSettingsContainer: ProfileSettingsContainer
}

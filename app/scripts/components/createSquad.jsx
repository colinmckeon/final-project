var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var CreateSquadCollection = require('../models/squads.js').CreateSquadCollection;
var CreateSquadModel = require('../models/squads.js').CreateSquadModel;
var User = require('../models/users.js').User;


var CreateSquad = React.createClass({
  getInitialState: function(){
    return {
      players: '',
      message: ''
    };
  },
  handleCreateSquad: function(e){
    e.preventDefault();

    var players = this.state.players;
    var message = this.state.message;

    var collection = this.props.collection;
    var self = this;

    var user = User.current();
    var squad = new CreateSquadModel(this.state);
    squad.set('creator', {'__type': 'Pointer', 'className': '_User', 'objectId': user.get('objectId')})
    squad.set('game', {'__type': 'Pointer', 'className': 'Games', 'objectId': this.props.gameId})

    collection.create(squad,{success: function(model){
      self.props.router.navigate('findSquad/' + model.get('objectId') + '/', {trigger: true});

    }});


  },
  handlePlayersNeeded: function(e){
    this.setState({players: e.target.value})
  },
  handleCreatorMessage: function(e){
    this.setState({message: e.target.value})
  },
  render: function(){
    return (
      <div className="col-md-8 col-md-offset-2">
        <div className="createSquadHolder">

          <div className="createSquadTitleHolder">
            <h1 id="createSquadTitle">CREATE A SQUAD <i className="fa fa-plus-circle" aria-hidden="true"></i></h1>
          </div>
          <br />
          <br />

          <form onSubmit={this.handleCreateSquad}>
            <div>
              <label forHTML="playersNeeded">Players Needed for Squad: &nbsp; </label>
              <input onChange={this.handlePlayersNeeded} value={this.state.players} id="playersNeeded" type="number" min="1" max="40" placeholder="minimum of 1"></input>
            </div>
            <br />

            <div>
              <label forHTML="creatorMessage">Your Message to the Squad:</label>
              <textarea onChange={this.handleCreatorMessage} value={this.state.message} id="creatorMessage" placeholder="E.g. I am playing on e.g. (PC, XBOX, Playstation) I am looking to find a squad of competitive players who's skill level is 'blank'. Everyone needs mic, and no arguing is allowed.  Looking for players attempting to accomplish 'blank'.  Trying to start a queue in at most, 15 minutes. Let's pwn some noobs!!!!"></textarea>
            </div>
            <br />

            <button id="createNewSquadButton" className="btn" type="submit">Create Squad <i className="fa fa-gamepad" aria-hidden="true"></i></button>
          </form>

        </div>
      </div>
    );
  }
});

var CreateSquadContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new CreateSquadCollection()
    }
  },
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">
              <CreateSquad
                collection={this.state.collection}
                router={this.props.router}
                squadId={this.props.squadId}
                gameId={this.props.gameId}
                />
            </div>
          </div>
        </Template>

    );
  }
});

module.exports = {
  CreateSquadContainer: CreateSquadContainer
}

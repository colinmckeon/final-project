var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var CreateSquadModel = require('../models/squads.js').CreateSquadModel;
var User = require('../models/users.js').User;
var SquadMemberCollection = require('../models/squads.js').SquadMemberCollection;
var setupParse = require('../parseUtilities.js').setupParse;

var MyCurrentSquad = React.createClass({
  getInitialState: function(){
    return {
      members: this.props.members
    }
  },
  componentWillMount: function(){
    var members = this.state.members;
    var self = this;

    setupParse('genji', 'junkrat');

    members.fetch().then(function(){
      self.setState({members: members});
    });
  },
  handleDelete: function(){
    this.state.members.each(function(member){
      member.set('squad', null);
      member.save();
    })
    this.props.squad.destroy();
    Backbone.history.navigate('chooseGame/', {trigger: true})
  },
  render: function(){
    var self = this;
    var creator = this.props.squad.get('creator');
    var isCreator = creator.objectId == User.current().get('objectId');
    return (
      <div className="col-md-8 col-md-offset-2">
        <div>
          <h2 className="squadCreatorTitle">Squad Creator: </h2> &nbsp;
          <a id="squadCreatorLink" href={'#userProfile/' + creator.objectId}>
            {creator.qusername}
          </a>
        </div>

        <div>
          <h5 className="squadMembersTitleCurrentSquad">Squad Members:</h5>
          <ul>
            {this.state.members.map(function(member){
              return (
                <li key={member.cid}>
                <a onClick={function(){self.props.handleSpecificGames(member)}} className="listedCurrentSquadMembers" href={'#userProfile/' + member.get('objectId')}>{member.get('qusername')}</a>
                </li>
              )
            })}</ul>
        </div>

        <div>
          <h4 id="squadCreatorMessageTitle">Squad Creator's Message:</h4>
          <h5 className="creatorMessageCurrentSquad well">{this.props.squad.get('message')}</h5>
        </div>
        {isCreator ? <button onClick={this.handleDelete}>DELETE</button> : null}
      </div>
    );
  }
});

var MyCurrentSquadContainer = React.createClass({
  getInitialState: function(){
    return {
      squad: new CreateSquadModel(),
      members: new SquadMemberCollection()
    }
  },
  componentWillMount: function(){
    var currentSquad = this.state.squad;
    var members = this.state.members;
    var objectId = this.props.squadId;
    var self = this;

    currentSquad.set({objectId: objectId});

    setupParse('genji', 'junkrat');

    currentSquad.fetch({data: {include: 'creator'}}).then(function(){
      self.setState({squad: currentSquad});
    });

    members.squadId = objectId;

    setupParse('genji', 'junkrat');

    members.fetch().then(function(){
      self.setState({members: members});
    });
  },
  handleSpecificGames: function(member){
    localStorage.setItem('member', JSON.stringify(member));
  },
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">
              <MyCurrentSquad
                members={this.state.members}
                user={this.state.user}
                squad={this.state.squad}
                handleSpecificGames={this.handleSpecificGames}
                />
            </div>
          </div>
        </Template>


    );
  }
});


module.exports = {
  MyCurrentSquadContainer: MyCurrentSquadContainer
}

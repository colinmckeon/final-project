var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var CreateSquadModel = require('../models/squads.js').CreateSquadModel;

var MyCurrentSquad = React.createClass({
  render: function(){
    return (
      <div>
        <h1 id="example">{this.props.squad.get('message')}</h1>
      </div>
    );
  }
});

var MyCurrentSquadContainer = React.createClass({
  getInitialState: function(){
    return {
      squad: new CreateSquadModel()
    }
  },
  componentWillMount: function(){
    var currentSquad = this.state.squad;
    var objectId = this.props.squadId;
    var self = this;
    currentSquad.set({objectId: objectId});

    currentSquad.fetch().then(function(){
      self.setState({squad: currentSquad});
    });
  },
  render: function(){
    console.log(this.props.squadId);
    return (

        <Template>
          <MyCurrentSquad squad={this.state.squad}/>
        </Template>


    );
  }
});


module.exports = {
  MyCurrentSquadContainer: MyCurrentSquadContainer
}

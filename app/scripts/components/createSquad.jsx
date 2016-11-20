var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;


var CreateSquad = React.createClass({
  render: function(){
    return (
      <h1 id="example">CREATE SQUAD SCREEN</h1>
    );
  }
});

var CreateSquadContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <createSquad />
      </div>
    );
  }
});

module.exports = {
  CreateSquadContainer: CreateSquadContainer
}

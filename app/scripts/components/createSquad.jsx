var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;


var CreateSquadContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <h1 id="example">CREATE SQUAD SCREEN</h1>
      </div>
    );
  }
});

module.exports = {
  CreateSquadContainer: CreateSquadContainer
}

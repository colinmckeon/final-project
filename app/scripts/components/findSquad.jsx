var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;

var FindSquadContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <h1 id="example">FIND SQUAD SCREEN</h1>
      </div>
    );
  }
});

module.exports = {
  FindSquadContainer: FindSquadContainer
}

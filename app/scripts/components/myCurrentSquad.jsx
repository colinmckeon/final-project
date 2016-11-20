var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;

var MyCurrentSquadContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <h1 id="example">MY CURRENT SQUAD SCREEN</h1>
      </div>
    );
  }
});


module.exports = {
  MyCurrentSquadContainer: MyCurrentSquadContainer
}

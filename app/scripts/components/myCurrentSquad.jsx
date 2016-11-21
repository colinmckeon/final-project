var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;

var MyCurrentSquad = React.createClass({
  render: function(){
    return (
      <div>
        <h1 id="example">MY CURRENT SQUAD SCREEN</h1>
      </div>
    );
  }
});

var MyCurrentSquadContainer = React.createClass({
  render: function(){
    return (

        <Template>
          <MyCurrentSquad />
        </Template>


    );
  }
});


module.exports = {
  MyCurrentSquadContainer: MyCurrentSquadContainer
}

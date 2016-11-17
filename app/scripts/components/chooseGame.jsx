var React = require('react');
var Backbone = require('backbone');


var Template = require('./templates.jsx').Template;


var ChooseGameContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
      </div>
    );
  }
});


module.exports = {
  ChooseGameContainer: ChooseGameContainer
}

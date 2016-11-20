var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;

var ProfileSettingsContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <h1 id="example">PROFILE SETTINGS SCREEN</h1>
      </div>
    );
  }
});

module.exports = {
  ProfileSettingsContainer: ProfileSettingsContainer
}

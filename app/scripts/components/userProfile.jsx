var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;

var ImageUpload = React.createClass({
  render: function(){
    return (
      <div>
        <h1 id="example">PERSONAL USER PROFILE</h1>
      </div>
    );
  }
});

var UserProfileContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
        <ImageUpload />
      </div>
    );
  }
});


module.exports = {
  UserProfileContainer: UserProfileContainer
}

var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;



var UserProfileContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Template />
      </div>
    );
  }
});


module.exports = {
  UserProfileContainer: UserProfileContainer
}

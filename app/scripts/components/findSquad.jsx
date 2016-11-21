var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;


var FindSquad = React.createClass({
  render: function(){
    return (
      <div>
        <h1 id="findSquadTitle">JOIN A SQUAD</h1>
        <div className="col-md-6 well">

        </div>
      </div>
    );
  }
});


var FindSquadContainer = React.createClass({
  get
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">

              <FindSquad />
            </div>

          </div>
        </Template>


    );
  }
});

module.exports = {
  FindSquadContainer: FindSquadContainer
}

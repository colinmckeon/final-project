var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;


var CreateSquad = React.createClass({
  render: function(){
    return (
      <div className="col-md-8 col-md-offset-2">
        <div className="createSquadHolder">

          <div className="createSquadTitleHolder">
            <h1 id="createSquadTitle">CREATE A SQUAD</h1>
          </div>

          <form>
            <div>
              <label forHTML="playersNeeded">Players Needed for Squad: &nbsp; </label>
              <input id="playersNeeded" type="number" min="1" max="40" placeholder="minimum of 1"></input>
            </div>

            <div>
              <label forHTML="creatorMessage">Message</label>
              <textarea id="creatorMessage"></textarea>
            </div>

          </form>

        </div>
      </div>
    );
  }
});

var CreateSquadContainer = React.createClass({
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">
              <CreateSquad />
            </div>
          </div>
        </Template>

    );
  }
});

module.exports = {
  CreateSquadContainer: CreateSquadContainer
}

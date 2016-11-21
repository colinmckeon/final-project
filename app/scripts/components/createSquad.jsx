var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;


var CreateSquad = React.createClass({
  render: function(){
    return (
      <div className="col-md-8 col-md-offset-2">
        <div className="createSquadHolder">

          <div className="createSquadTitleHolder">
            <h1 id="createSquadTitle">CREATE A SQUAD <i className="fa fa-plus-circle" aria-hidden="true"></i></h1>
          </div>
          <br />
          <br />

          <form>
            <div>
              <label forHTML="playersNeeded">Players Needed for Squad: &nbsp; </label>
              <input id="playersNeeded" type="number" min="1" max="40" placeholder="minimum of 1"></input>
            </div>
            <br />

            <div>
              <label forHTML="creatorMessage">Your Message to the Squad:</label>
              <textarea id="creatorMessage" placeholder="E.g. I am looking to find a squad of competitive players who's skill level is 'blank'. Everyone needs mic, and no arguing is allowed.  Looking for players attempting to accomplish 'blank'.  Trying to start a queue in at most, 15 minutes. Let's pwn some noobs!!!!"></textarea>
            </div>
            <br />

            <button id="createNewSquadButton" className="btn" type="submit">Create Squad <i className="fa fa-gamepad" aria-hidden="true"></i></button>
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

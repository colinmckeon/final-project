var React = require('react');
var Backbone = require('backbone');

var Template = require('./templates.jsx').Template;
var CreateSquadCollection = require('../models/squads.js').CreateSquadCollection;


var FindSquad = React.createClass({
  render: function(){
    var squadList = this.props.squadListing.map(function(squad){
      console.log(squad);
      return (
        <div key={squad.objectId}>
          <h1>{squad.players}</h1>
          <p>{squad.message}</p>

          <div>
          <button className="btn joinSquadButton" type="submit">Join Squad <i className="fa fa-gamepad" aria-hidden="true"></i></button>
          </div>

        </div>
      )
    });
    return (
      <div>
        <h1 id="findSquadTitle">JOIN A SQUAD</h1>
        <div className="col-md-6 well">
          {squadList}
        </div>
      </div>
    );
  }
});


var FindSquadContainer = React.createClass({
  getInitialState: function(){
    return{
      collection: new CreateSquadCollection(),
      squadListing: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;

    collection.fetch().then(function(response){

      self.setState({squadListing: response.results});
    });
  },
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">

              <FindSquad squadListing={this.state.squadListing}/>
            </div>

          </div>
        </Template>


    );
  }
});

module.exports = {
  FindSquadContainer: FindSquadContainer
}

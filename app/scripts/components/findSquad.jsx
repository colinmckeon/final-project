var React = require('react');
var Backbone = require('backbone');



var Template = require('./templates.jsx').Template;
var CreateSquadCollection = require('../models/squads.js').CreateSquadCollection;
var CreateSquadModel = require('../models/squads.js').CreateSquadModel;
var User = require('../models/users.js').User;


var FindSquad = React.createClass({
  toMyCurrentSquad: function(squadId){

    var user = User.current();
    var squad = new CreateSquadModel(this.state);
    user.set('squad', {'__type': 'Pointer', 'className': 'Squads', 'objectId': squadId})
    user.userAuth().save().then(function(response){
      console.log(response);
    });

    this.props.router.navigate('findSquad/' + squadId + '/', {trigger: true});
  },
  render: function(){
    var self = this;
    var squadList = this.props.squadListing.map(function(squad){
      return (
        <div className="col-md-6" key={squad.objectId}>
          <div className="well">

            <h4>Players Needed: {squad.players}</h4>
            <p>{squad.message}</p>

            <div>
            <button onClick={function(){self.toMyCurrentSquad(squad.objectId)}} className="btn joinSquadButton" type="button">Join Squad <i className="fa fa-gamepad" aria-hidden="true"></i></button>
            </div>

          </div>
        </div>
      )
    });
    return (
      <div>
        <h1 id="findSquadTitle">JOIN A SQUAD</h1>
        <div>
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

              <FindSquad squadListing={this.state.squadListing} router={this.props.router}/>
            </div>

          </div>
        </Template>


    );
  }
});

module.exports = {
  FindSquadContainer: FindSquadContainer
}

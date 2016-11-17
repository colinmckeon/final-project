var React = require('react');
var Backbone = require('backbone');


var Template = require('./templates.jsx').Template;
var gameCovers = require('../dummyData.js').gameCovers;


var Game = React.createClass({
  render: function (){

    var gameHtml = this.props.gameList.map(function(item, index){
      return (
        <div className="col-md-3" key={item.id + index}>
          <a href="#createSquad/">
            <div className="gameCover-holder">
              <h6>{item.name}</h6>
            </div>
          </a>
        </div>
      );
    });
      return(
        <div>
            {gameHtml}
        </div>
      )
  }
});

var ChooseGameContainer = React.createClass({
  getInitialState: function(){
    return {
      game: gameCovers
    }
  },
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">

                <Game gameList={this.state.game} />

            </div>
          </div>
        </Template>


    );
  }
});


module.exports = {
  ChooseGameContainer: ChooseGameContainer
}

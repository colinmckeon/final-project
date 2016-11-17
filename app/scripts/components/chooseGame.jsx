var React = require('react');
var Backbone = require('backbone');


var Template = require('./templates.jsx').Template;
var gameCovers = require('../dummyData.js').gameCovers;


var Game = React.createClass({
  render: function (){

    var gameHtml = this.props.gameList.map(function(item, index){
      return (
        <div className="gameCover-holder" key={item.id + index}>
          <li><h6>{item.name}</h6></li>

        </div>
      );
    });
      return(
        <div>
          <ul>
            {gameHtml}
          </ul>
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
      <div>
        <Template />
        <Game gameList={this.state.game} />
      </div>
    );
  }
});


module.exports = {
  ChooseGameContainer: ChooseGameContainer
}

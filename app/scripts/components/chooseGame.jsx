var React = require('react');
var Backbone = require('backbone');
var Modal = require('react-modal');



var Template = require('./templates.jsx').Template;
var gameCovers = require('../dummyData.js').gameCovers;

var GameCoverArtCollection = require('../models/gameCover.js').GameCoverArtCollection;


var Game = React.createClass({
  getInitialState: function(){
   return {
     modalIsOpen: false,
     collection: new GameCoverArtCollection()
    };
  },
  componentWillMount: function(){
    this.state.collection.fetch().then(function(response){
      console.log(response);
    })
  },
 openModal: function(){
   this.setState({modalIsOpen: true});
  },
 closeModal: function(){
    this.setState({modalIsOpen: false});
  },
  render: function(){
    var self = this;
    var gameHtml = this.props.gameList.map(function(item, index){
      return (

          <div className="col-md-3" key={item.id + index}>
              <div onClick={self.openModal} className="gameCover-holder">
                <h6>{item.name}</h6>
              </div>
          </div>

      );
    });
      return(
        <div>
          <Modal isOpen={this.state.modalIsOpen}>
            <button onClick={this.closeModal}>close</button>
          </Modal>
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

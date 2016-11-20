var React = require('react');
var Backbone = require('backbone');
var Modal = require('react-modal');



var Template = require('./templates.jsx').Template;
var gameCovers = require('../dummyData.js').gameCovers;

// var GameCoverArtCollectionA = require('../models/gameCover.js').GameCoverArtCollectionA;


var Game = React.createClass({
  getInitialState: function(){

   return {
     modalIsOpen: false,
      collection: []
    };
  },
  componentWillMount: function(){
    var self = this;
    var allGames = []; // array to hold all the games

    $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover&search=overwatch,diablo,minecraft,smite:desc:min&limit=50')
      .then(function(data){
        //console.log(data);
        // self.setState({collection: data})
        data.forEach(function(game){
          allGames.push(game)
        });

        $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover&search=dota,rocketleague,worldofwarcraft,hearthstone:desc:min&limit=50')
          .then(function(data) {
            console.log('2nd fetch', data);
            data.forEach(function(game){
              allGames.push(game)
            });
            // self.collection.push(data)
            self.setState({collection: allGames});
          });

    });

  },
 openModal: function(){
   this.setState({modalIsOpen: true});
  },
 closeModal: function(){
    this.setState({modalIsOpen: false});
  },
  toFindSquad: function(e){
    e.preventDefault();
    this.props.router.navigate('findSquad/', {trigger: true});
  },
  toCreateSquad: function(e){
    e.preventDefault();
    this.props.router.navigate('createSquad/', {trigger: true});
  },
  render: function(){
    console.log('state collection', this.state.collection);
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
            <div>
              <button onClick={this.closeModal}> <i className="fa fa-times" aria-hidden="true"></i> </button>
            </div>
            <br/>

            <div>
              <button onClick={this.toFindSquad} type="button" className="btn btn-lg btn-block findSquadButton">Find a QueueSquad</button>
            </div>

            <br/>
            <div className="modal-or">
              <span>OR</span>
            </div>
            <br/>

              <div>
                <button onClick={this.toCreateSquad} type="button" className="btn btn-lg btn-block createSquadButton">Create a QueueSquad</button>
              </div>
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

                <Game gameList={this.state.game} router={this.props.router}/>

            </div>
          </div>
        </Template>


    );
  }
});


module.exports = {
  ChooseGameContainer: ChooseGameContainer
}

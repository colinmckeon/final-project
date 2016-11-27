var React = require('react');
var Backbone = require('backbone');
var Modal = require('react-modal');



var Template = require('./templates.jsx').Template;
var gameCovers = require('../dummyData.js').gameCovers;

var GameCollection = require('../models/gameCover.js').GameCollection;


var Game = React.createClass({
  getInitialState: function(){
   return {
     modalIsOpen: false,
    };
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
    var self = this;
    var gameHtml = this.props.gameList.map(function(item, index){
      return (
        <div key={item.get('objectId') + index}>
          <div className="col-md-3">
              <div onClick={self.openModal} className="gameCover-holder">
                <h5 className="chooseGameTitle">{item.get('name')}</h5>
                <img src={item.get('coverArt')} />
              </div>
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
            <h1 id="chooseGameScreenTitle">Find or Create a Squad to "QueueUp"</h1>
            {gameHtml}
        </div>
      )
  }
});

var ChooseGameContainer = React.createClass({
  getInitialState: function(){

   return {
    modalIsOpen: false,
    collection: new GameCollection()
    };
  },
  componentWillMount: function(){
    var self = this;
    var gameCollection = this.state.collection;

    gameCollection.fetch().then(function(){
      self.setState({collection: gameCollection});
    });
  },
  render: function(){
    return (

        <Template>
          <div className="container">
            <div className="row">

                <Game gameList={this.state.collection} router={this.props.router}/>

            </div>
          </div>
        </Template>


    );
  }
});


module.exports = {
  ChooseGameContainer: ChooseGameContainer
}

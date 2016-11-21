var React = require('react');
var Backbone = require('backbone');

var User = require('../models/users.js').User;

var CreateUser = React.createClass({
  getInitialState: function(){
    return{
      qusername: '',
      email: '',
      password: '',
      gamertag: ''
    };
  },
  handleSignUp: function(e){
    e.preventDefault();

    var qusername = this.state.qusername;
    var email = this.state.email;
    var password = this.state.password;
    var gamertag = this.state.gamertag;
    var router = this.props.router;

    this.props.signUp(qusername, email, password, gamertag, router);
  },
  handleQusernameInput: function(e){
    this.setState({qusername: e.target.value})
  },
  handleEmailInput: function(e){
    this.setState({email: e.target.value})
  },
  handlePasswordInput: function(e){
    this.setState({password: e.target.value})
  },
  handleGamertagInput: function(e){
    this.setState({gamertag: e.target.value})
  },
  toLogIn: function(e){
    e.preventDefault();
    this.props.router.navigate('#', {trigger: true});
  },
  render: function(){
    return(
      <div className="col-md-8 col-md-offset-2">
        <h2>Need an Account? Sign Up!</h2>
        <form onSubmit={this.handleSignUp} id="signup">

          <div className="form-group">
            <label forHTML="qusername">QueueUp Username</label>
            <input onChange={this.handleQusernameInput} value={this.state.qusername} className="form-control" name="qusername" id="qusername" type="text" placeholder="QueueUp username" />
          </div>

          <div className="form-group">
            <label forHTML="email">Email address</label>
            <input onChange={this.handleEmailInput} value={this.state.email} className="form-control" name="email" id="email" type="email" placeholder="email" />
          </div>

          <div className="form-group">
            <label forHTML="password">Password</label>
            <input onChange={this.handlePasswordInput} value={this.state.password} className="form-control" name="password" id="password" type="password" placeholder="password" />
          </div>

          <div className="form-group">
            <label forHTML="gamertag">Xbox Gamertag</label>
            <input onChange={this.handleGamertagInput} value={this.state.gamertag} className="form-control" name="gamertag" id="gamertag" type="text" placeholder="gamertag" />
          </div>

          <button className="btn create-account-btn" type="submit">CreateAccount <i className="fa fa-gamepad" aria-hidden="true"></i></button>
          <button onClick={this.toLogIn} id="goBackButton" className="btn">Go Back</button>
        </form>
      </div>
    )
  }
});


var CreateUserContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },
  signUp: function(qusername, email, password, gamertag, router){
    this.state.user.set({qusername: qusername, username: email, password: password, gamertag: gamertag, email: email});
    this.state.user.signUp(router)
  },
  render: function(){
    return(
      <div className="container">
        <div className="row">

          <CreateUser signUp={this.signUp} router={this.props.router}/>

        </div>
      </div>
    )
  }
});


module.exports = {
  CreateUserContainer: CreateUserContainer
}

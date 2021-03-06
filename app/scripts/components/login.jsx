var React = require('react');
var Backbone = require('backbone');

var User = require('../models/users.js').User;


 var LogIn = React.createClass({
   getInitialState: function(){
     return{
       email: '',
       password: '',
     };
   },
   handleLogIn: function(e){
     e.preventDefault();

     var email = this.state.email;
     var password = this.state.password;
     var router = this.props.router;


     this.props.logIn(email, password, router);
   },
   handleEmailInput: function(e){
     this.setState({email: e.target.value})
   },
   handlePasswordInput: function(e){
     this.setState({password: e.target.value})
   },
   toCreateUser: function(e){
     e.preventDefault();
     this.props.router.navigate('newUser/', {trigger: true});
   },
   render: function(){
     return (
       <div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <br/>
               <div id="loginLogoHolder">
                 <img id="loginLogo" src="images/RobotoFont/QUp_Roboto.png"></img>
               </div>
            </div>
          </div>

            <div className="row">
             <div className="col-md-8 col-md-offset-2">

               <h2 id="signInTitle">Sign in Here!</h2>
               <form onSubmit={this.handleLogIn} id="login">
                 <div className="form-group">
                   <label forHTML="email-login">Email address</label>
                   <input onChange={this.handleEmailInput} value={this.state.email} className="form-control" name="email" id="email-login" type="email" placeholder="email" />
                 </div>

                 <div className="form-group">
                   <label forHTML="password-login">Password</label>
                   <input onChange={this.handlePasswordInput} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="password" />
                 </div>
                  <div className="login-button-holder">
                    <button id="login-button" className="btn" type="submit">Log In <i className="fa fa-gamepad" aria-hidden="true"></i></button>
                    <span id="or-span">First Time Visiting QueueUp<i className="fa fa-question" aria-hidden="true"></i> &nbsp; <i className="fa fa-hand-o-right" aria-hidden="true"></i></span>
                    <button onClick={this.toCreateUser} id="create-newuser-button" className="btn" type="submit">Create New Account</button>
                  </div>
               </form>

              </div>
            </div>
            <br/>
            <hr/>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div id="messageToUsersHolder">
                  <p id="messageToUsers">
                    QueueUp is a gaming resource for users to create/find squads that other gamers can join.
                    The purpose is to join up with similar minded gamers in some of the most popular multiplayer
                    XBOX titles.  Here, you can create a squad that is specific to one's intentions. Whether it be
                    competitive or social, QueueUp is the place to join up and dominate the online gaming world!
                  </p>
                </div>
              </div>
            </div>

          </div>
     )
   }
 });



 var LogInContainer = React.createClass({
   getInitialState: function(){
     return {
       user: new User()
     }
   },
   logIn: function(email, password, router){
     this.state.user.set({username: email, password: password});
     this.state.user.logIn(email, password, router)
   },
   render: function(){
     return (
       <div className="container">

         <LogIn logIn={this.logIn} router={this.props.router}/>

       </div>
     )
   }
 });


module.exports = {
  LogInContainer: LogInContainer
}

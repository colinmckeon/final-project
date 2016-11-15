var React = require('react');
var Backbone = require('backbone');

var User = require('../models/models.js').User;


 var LogIn = React.createClass({
   getInitialState: function(){
     return{
       email: '',
       password: ''
     };
   },
   handleLogIn: function(e){
     e.preventDefault();

     var email = this.state.email;
     var password = this.state.password;

     this.props.logIn(username, password);
   },
   handleEmailInput: function(e){
     this.setState({email: e.target.value})
   },
   handlePasswordInput: function(e){
     this.setState({password: e.target.value})
   },
   render: function(){
     return (
       <div className="col-md-8 col-md-offset-2">
             <h2>Sign in Here!</h2>
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
                  <span id="or-span">First Time Visiting QueueUp? <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                  <button id="create-newuser-button" className="btn" type="submit">Create New Account</button>
                </div>
             </form>
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
   logIn: function(){
     this.state.user.set({email: email, password: password});
     this.state.user.logIn(email, password)
   },
   render: function(){
     return (
       <div className="container">
         <div className="row">

           <LogIn logIn={this.logIn} />

         </div>
       </div>
     )
   }
 });


module.exports = {
  LogInContainer: LogInContainer
}

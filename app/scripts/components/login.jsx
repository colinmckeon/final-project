 var React = require('react');
 var Backbone = require('backbone');

 var LogIn = React.createClass({
   render: function(){
     return (
       <div className="col-md-8 col-md-offset-2">
             <h2>Sign in Here!</h2>
             <form id="login">
               <div className="form-group">
                 <label forHTML="email-login">Email address</label>
                 <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
               </div>

               <div className="form-group">
                 <label forHTML="password-login">Password</label>
                 <input className="form-control" name="password" id="password-login" type="password" placeholder="password" />
               </div>
               <div className="login-button-holder">
                  <button id="login-button" className="btn" type="submit">Log In <i className="fa fa-gamepad" aria-hidden="true"></i></button>
                  <span id="or-span">OR</span>
                  <button className="btn" type="submit">Create New User</button>
              </div>
             </form>
        </div>
     )
   }
 });



 var LogInContainer = React.createClass({
   render: function(){
     return (
       <div className="container">
         <div className="row">

           <LogIn />

         </div>
       </div>
     )
   }
 });


module.exports = {
  LogInContainer: LogInContainer
}

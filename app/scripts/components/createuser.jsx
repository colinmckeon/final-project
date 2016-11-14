var React = require('react');
var Backbone = require('backbone');


var CreateUser = React.createClass({
  render: function(){
    return(
      <div className="col-md-8 col-md-offset-2">
        <h2>Need an Account? Sign Up!</h2>
        <form id="signup">

          <div className="form-group">
            <label forHTML="first-name">First Name</label>
            <input className="form-control" name="first-name" id="first-name" type="text" placeholder="first name" />
          </div>

          <div className="form-group">
            <label forHTML="last-name">Last Name</label>
            <input className="form-control" name="last-name" id="last-name" type="text" placeholder="last name" />
          </div>

          <div className="form-group">
            <label forHTML="email">Email address</label>
            <input className="form-control" name="email" id="email" type="email" placeholder="email" />
          </div>

          <div className="form-group">
            <label forHTML="password">Password</label>
            <input className="form-control" name="password" id="password" type="password" placeholder="password" />
          </div>

          <div className="form-group">
            <label forHTML="gamertag">Xbox Gamertag</label>
            <input className="form-control" name="gamertag" id="gamertag" type="text" placeholder="gamertag" />
          </div>

          <button className="btn create-account-btn" type="submit">Create Account <i className="fa fa-gamepad" aria-hidden="true"></i></button>
        </form>
      </div>
    )
  }
});


var CreateUserContainer = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">

          <CreateUser />

        </div>
      </div>
    )
  }
});


module.exports = {
  CreateUserContainer: CreateUserContainer
}

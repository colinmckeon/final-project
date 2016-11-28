var Backbone = require('backbone');
var React = require('react');

var User = require('../models/users.js').User;


var NavBar = React.createClass({
  getInitialState: function(){
    return {
      user: User.current()
    }
  },
  handleLogOut: function(){
    localStorage.clear();
  },
  render: function(){
    var user = this.state.user;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <img src="images/queueuplogo.png" className="navBarLogo"></img>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Squads <i className="fa fa-users" aria-hidden="true"></i><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#chooseGame/">Find / Create Squad </a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href={'#findSquad/' + user.get('squad').objectId + '/'}>My Current Squad</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user.get('qusername')} <i className="fa fa-user" aria-hidden="true"></i><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href={'#userProfile/' + user.get('objectId')}>My Profile</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#profileSettings/">Settings <i className="fa fa-wrench" aria-hidden="true"></i></a></li>
                </ul>
              </li>
              <li><a onClick={this.handleLogOut} href="#">Log Out <i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});


var Template = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = {
  Template: Template
}

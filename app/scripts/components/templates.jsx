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
    var squadLink = user.get('squad') ? '#findSquad/' + user.get('squad').objectId + '/': '#chooseGame/';
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
            <img src="images/RobotoFont/QUp_Roboto2.svg" className="navBarLogo"></img>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" id="squadsNavBarDropdown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Squads <i className="fa fa-users" aria-hidden="true"></i><span className="caret"></span></a>
                <ul id="dropdownBackgroundA" className="dropdown-menu">
                  <li><a className="navBarDropdownLinks" href="#chooseGame/">Find / Create Squad </a></li>
                  <li role="separator" id="seperatorDropdownA" className="divider"></li>
                  <li><a className="navBarDropdownLinks" href={squadLink}>My Current Squad</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" id="myProfileNavBarDropdown" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user.get('qusername')} <i className="fa fa-user" aria-hidden="true"></i><span className="caret"></span></a>
                <ul id="dropdownBackgroundB" className="dropdown-menu">
                  <li><a className="navBarDropdownLinks" href={'#userProfile/' + user.get('objectId')}>My Profile</a></li>
                  <li role="separator" id="seperatorDropdownB" className="divider"></li>
                  <li><a className="navBarDropdownLinks" href="#profileSettings/">Settings <i className="fa fa-wrench" aria-hidden="true"></i></a></li>
                </ul>
              </li>
              <li><a onClick={this.handleLogOut} id="logOutNavBarLink" href="#">Log Out <i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});


var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div id="footerInfoHolder">

                <div className="col-md-5">
                  <div id="developedByHolder">
                    <h5 className="footerInfoA">|&nbsp; Contact at 14mckeon@gmail.com &nbsp;|</h5>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="footerLogoHolder">
                    <img className="footerLogo" src="images/RobotoFont/QUp_Roboto.svg"></img>
                  </div>
                </div>

                <div className="col-md-5">
                  <div id="contactInfoHolder">
                    <h5 className="footerInfoB">|&nbsp; Developed and Designed by Colin McKeon &nbsp;|</h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});


var Template = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />

        <div className="content">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
});

module.exports = {
  Template: Template
}

var Backbone = require('backbone');
var React = require('react');


var NavBar = React.createClass({
  render: function(){
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
            <a className="navbar-brand" href="#">QueueUp</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Squads <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Find Squad</a></li>
                  <li><a href="#">Create Squad</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">My Squads</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Profile <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Go To</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Settings</a></li>
                </ul>
              </li>
              <li><a href="#">Log Out</a></li>
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

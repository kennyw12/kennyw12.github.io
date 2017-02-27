require('../stylesheets/application.scss');

const React = require('react');
const ReactDOM = require('react-dom');

const githubLink = 'https://github.com/kennyw12';
const linkedinLink = 'https://www.linkedin.com/in/kennyw12';

const Title = React.createClass({
  render: function() {
   return (
    <div className="title">
     {this.props.children}
    </div>
   );
  }
});

const Nav = React.createClass({
  render: function() {
   return (
    <div className="nav">
     {this.props.children}
    </div>
   );
  }
});

const NavItem = React.createClass({
  render: function() {
   return (
    <div className="nav-item">
     {this.props.children}
    </div>
   );
  }
});

const Header = React.createClass({
  render: function() {
   return (
    <div className="amber header">
     <Title>Kenny Wang</Title>
     <Nav>
      <NavItem>
       <a target="_blank" href={githubLink}>Github</a>
      </NavItem>
      <NavItem>
       <a target="_blank" href={linkedinLink}>LinkedIn</a>
      </NavItem>
     </Nav>
    </div>
   );
  }
});

const Content = React.createClass({
  render: function() {
   return (
    <div className="content-wrapper">
     <div className="content">
      I am a web developer trying out different technologies.
     </div>
    </div>
   );
  }
});

const Application = React.createClass({
  render: function() {
   return (
    <div>
     <Header/>
     <Content/>
    </div>
   );
  }
});

ReactDOM.render(
  <Application/>,
  document.getElementById('root')
);
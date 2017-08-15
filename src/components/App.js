import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import JumboTron from './Header';
import * as rB from 'react-bootstrap';



// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <JumboTron />

        <rB.Navbar>
          <rB.Navbar.Header>
            <rB.Navbar.Brand>
              <a href="/">Compassionate Lucy</a>
            </rB.Navbar.Brand>
            <rB.Navbar.Toggle />
          </rB.Navbar.Header>
          <rB.Navbar.Collapse>
            <rB.Nav>
              <rB.NavItem eventKey={1} href="#">Link1</rB.NavItem>
              <rB.NavItem eventKey={2} href="#">Link2</rB.NavItem>
            </rB.Nav>
            <rB.Nav pullRight>
              <rB.NavItem eventKey={1} href="#">Link3</rB.NavItem>
            </rB.Nav>
          </rB.Navbar.Collapse>
        </rB.Navbar>

        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
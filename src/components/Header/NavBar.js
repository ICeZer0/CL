import React from 'react';
import * as rB from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <rB.Navbar>
          <rB.Navbar.Header>
            <rB.Navbar.Brand>
              <a className="fa fa-home fa-2x" onClick={() => browserHistory.push('/')} />
            </rB.Navbar.Brand>
            <rB.Navbar.Toggle />
          </rB.Navbar.Header>
          <rB.Navbar.Collapse>
            <rB.Nav pullRight>
              <rB.NavItem eventKey={1} onClick={() => browserHistory.push('services')}>Services</rB.NavItem>
              <rB.NavItem eventKey={2} onClick={() => browserHistory.push('about-us')}>About Us</rB.NavItem>
              <rB.NavItem eventKey={2} onClick={() => browserHistory.push('faq')}>FAQ's</rB.NavItem>
              <rB.NavItem eventKey={2} onClick={() => browserHistory.push('careers')}>Careers</rB.NavItem>
              <rB.NavItem eventKey={2} onClick={() => browserHistory.push('testimonials')}>Testimonials</rB.NavItem>
              <rB.NavItem eventKey={1} onClick={() => browserHistory.push('contact-us')}>Contact Us</rB.NavItem>
            </rB.Nav>
          </rB.Navbar.Collapse>
        </rB.Navbar>
      </div>
    );
  }
}





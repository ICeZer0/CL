import React from 'react';
//import PropTypes from 'prop-types';
import * as rB from 'react-bootstrap';
import AboutPage from '../Pages/AboutPage';
import ServicesPage from '../Pages/ServicesPage';
import Faq from '../Pages/FaqPage';
import Careers from '../Pages/CareersPage';
import Testimonials from '../Pages/TestimonialPage';
import Contacts from '../Pages/ContactPage';
//import { Scrollspy } from 'react-scrollspy';

export default class CompassionateLucyHome extends React.Component {

  render() {
    return (
      <div>
        <div>
          <rB.Navbar id="navbar">
            <rB.Navbar.Header>
              <rB.Navbar.Brand>
                <a className="fa fa-home fa-2x" onClick={() => window.scrollTo(0,0)} />
              </rB.Navbar.Brand>
              <rB.Navbar.Toggle />
            </rB.Navbar.Header>
            <rB.Navbar.Collapse>
              <rB.Nav pullRight>
              <rB.NavItem href="#about" id="navItem">About Us</rB.NavItem>
                  <rB.NavItem href="#services" id="navItem">Services</rB.NavItem>
                  <rB.NavItem href="#faq" id="navItem">FAQ's</rB.NavItem>
                  <rB.NavItem href="#testimonials" id="navItem">Testimonials</rB.NavItem>
                  <rB.NavItem href="#careers" id="navItem">Careers</rB.NavItem>
                  <rB.NavItem href="#contact" id="navItem">Contact Us</rB.NavItem>
              </rB.Nav>
            </rB.Navbar.Collapse>
          </rB.Navbar>
        </div>

        <div id="home" data-spy="scroll" data-target="#navbar">

          <section id="about" className="page">
            <div className="aboutSection">
              <AboutPage />
            </div>
          </section>

          <section id="services" className="page">
            <div className="ServicesSection">
              <ServicesPage />
            </div>
          </section>

          <section id="faq" className="page">
            <div className="faqSection">
              <Faq />
            </div>
          </section>

          <section id="testimonials" className="page">
            <div className="testimonialSection">
              <Testimonials />
            </div>
          </section>

          <section id="careers" className="page">
            <div className="careersSection">
              <Careers />
            </div>
          </section>

          <section id="contact" className="page">
            <div className="contactSection">
              <Contacts />
            </div>
          </section>

        </div>
      </div>
    );
  }
}

// NavBar.propTypes = {
//   scrollStepInPx: PropTypes.num,
//   delayInMs: PropTypes.num
// };




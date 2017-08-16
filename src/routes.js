import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import FaqPage from './components/Pages/FaqPage';
import CareersPage from './components/Pages/CareersPage';
import ServicesPage from './components/Pages/ServicesPage';
import TestimonialPage from './components/Pages/TestimonialPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="contact-us" component={ContactPage}/>
    <Route path="about-us" component={AboutPage}/>
    <Route path="faq" component={FaqPage}/>
    <Route path="careers" component={CareersPage}/>
    <Route path="services" component={ServicesPage}/>
    <Route path="testimonials" component={TestimonialPage}/>
  </Route>
);

// Set up your application entry point here...
/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
//import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
//import { syncHistoryWithStore } from 'react-router-redux';

//const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory);
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

render(
    <Router history={browserHistory} routes={routes} />
  , document.getElementById('app')
);

import React, { PropTypes } from 'react';
import JumboTron from './Header/Header';
import NavBar from './Header/NavBar';
import Footer from './Header/Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <JumboTron />
        <div className="Body">
          <NavBar />
        </div>
        <div className="contentBody">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

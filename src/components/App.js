import React, { PropTypes } from 'react';
import JumboTron from './Header/Header';
import NavBar from './Header/NavBar';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <JumboTron />
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};


export default App;

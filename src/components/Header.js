import React from 'react';
import * as rB from 'react-bootstrap';

export default class JumboTron extends React.Component {
  render() {
    return (
        <rB.Jumbotron>
          <h1>Compassionate Lucy</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><rB.Button bsStyle="primary">Learn more</rB.Button></p>
        </rB.Jumbotron>
    );
  }
}





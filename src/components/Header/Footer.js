import React from 'react';
import moment from 'moment';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer fa fa-copyright" aria-hidden="true"> {moment().format('YYYY')} <a href="http://google.com">Embedded Mind LLC</a>.</div>
    );
  }
}





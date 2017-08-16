import React from 'react';
import {Link} from 'react-router';

const ServicesPage = () => {
  return (
    <div>
      <h1>Services</h1>
      <ol>
        <li>Review the <Link to="/">Home</Link></li>
      </ol>
    </div>
  );
};

export default ServicesPage;

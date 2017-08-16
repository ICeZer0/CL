import React from 'react';
import {Link} from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <ol>
        <li>Review the <Link to="/">Home</Link></li>
      </ol>
    </div>
  );
};

export default AboutPage;

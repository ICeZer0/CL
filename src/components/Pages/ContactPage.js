import React from 'react';
import {Link} from 'react-router';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ol>
        <li>Review the <Link to="/">Home</Link></li>
      </ol>
    </div>
  );
};

export default ContactPage;

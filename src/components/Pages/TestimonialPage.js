import React from 'react';
import {Link} from 'react-router';

const TestimonialPage = () => {
  return (
    <div>
      <h1>Testimonials</h1>
      <ol>
        <li>Review the <Link to="/">Home</Link></li>
      </ol>
    </div>
  );
};

export default TestimonialPage;

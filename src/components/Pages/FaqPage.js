import React from 'react';
import {Link} from 'react-router';

const FaqPage = () => {
  return (
    <div>
      <h1>FAQs</h1>
      <ol>
        <li>Review the <Link to="/">Home</Link></li>
      </ol>
    </div>
  );
};

export default FaqPage;

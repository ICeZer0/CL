import React from 'react';
import {Link} from 'react-router';
//import PropTypes from 'prop-types';
//import { RfIconTextInput } from 'sourcing-reactcomponents-shared';
//import ItemSelectList from '../common/item/itemSelectList';

const AboutPage = () => {
  return (
    <div id="AboutUs">
      <h1>About Us</h1>
        <h2>Our Motto:</h2>
          <p>Finding peace through strength and integrity.</p>
        <p>To assist clients in maintaining the highest possible level of independent living by providing respectable and compassionate care. Nothing is more important than assisting our clients to live dignified and fulfilling lives in the comfort of their own home. By providing high quality caregivers who take pride in their work, we feel we can achieve this Mission</p>
        <p><Link to="/">Home</Link></p>
        <br/>
        <h2>Who We Are:</h2>
          <p>Compassionate Lucy's Senior Home Care was founded by Elizabeth Tamfu. It was named after the founder's mother, Lucy, who was loving and passionate about people and serving others. Lucy worked her whole life taking care of people. The founder has never seen anyone else more passionate and dedicated at what they do. One thing that sticks with Elizabeth about her mother is that when she talked to her mother about her caring for others, her mother never referred to it as a job! Lucy always refers to it as her calling and gift from God. It was through her inspiration, integrity and strength that Elizabeth, the founder, dedicated herself to the same services of caring for others.</p>
    </div>
  );
};

export default AboutPage;

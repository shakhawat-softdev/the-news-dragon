import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
 return (
  <div>
   <h1>This is term and conditions</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam unde eum perspiciatis quaerat ratione deserunt nemo error numquam non.</p>

   <p>Go Back To <Link to='/register'>Register</Link></p>
  </div>
 );
};

export default Terms;
import React from 'react';
import { Link } from 'react-router-dom'
import './Splash.css'

function Splash(props) {
  return (
    <div
      className='splashbody'>
      <Link to='/welcome'>
        <img
          id='splashImg'
          src='media/0.jpg'
          alt='' />
      </Link>
    </div>
  );
}

export default Splash;
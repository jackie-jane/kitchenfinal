import React from 'react';
import './Body.css'
function Body(props) {
  return (
    <div
      id='body'
      style={{
        backgroundImage: 'url(media/svg/Surprise.svg)',
        backgroundSize: '75%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(36, 33, 33)'
      }}>
      {props.children}
    </div>
  );
}

export default Body;
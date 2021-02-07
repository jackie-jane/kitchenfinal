import React from 'react';
import './Body.css'
function Body(props) {
  return (
    <div
      id='body'
      style={{
        background: 'url(media/svg/Surprise.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black'
      }}>
      {props.children}
    </div>
  );
}

export default Body;
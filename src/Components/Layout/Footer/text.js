import React from 'react';
import Draggable from 'react-draggable';
import './Footer.css'

function text(props) {
  return (
    <Draggable>
      <div
        id='text'>
        developed by<br />
        jackie-jane<br />
        ryan holsopple<br />
        niall jones
      </div>
    </Draggable>
  );
}

export default text;
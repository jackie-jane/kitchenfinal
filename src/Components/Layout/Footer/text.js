import React from 'react';
import Draggable from 'react-draggable';
import './Footer.css'

function text(props) {
  return (
    <Draggable>
      <div
        id='text'>
        TEST TEST TEST TEST TEST TEST
      </div>
    </Draggable>
  );
}

export default text;
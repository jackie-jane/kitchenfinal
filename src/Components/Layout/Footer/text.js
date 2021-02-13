import React from 'react';
import Draggable from 'react-draggable';
import './Footer.css'

function text(props) {
  return (
    <Draggable>
      <div
        id='text'>
        this site is a potential theater of dispersed <br />
        fantasias, ruptures and un\assemblies. <br />
        images move, swarm, expire. <br />
        remains under construction. <br />
        developed by jackie-jane, <br />
        ryan holsopple and <br />
        niall jones.
      </div>
    </Draggable>
  );
}

export default text;
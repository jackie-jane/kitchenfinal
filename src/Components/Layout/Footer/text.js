import React from 'react';
import Draggable from 'react-draggable';
import './Footer.css'

function text(props) {
  return (
    <Draggable>
      <div
        id='text'>
        this site is a potential theater of dispersed fantasias, ruptures
and un\assemblies. images move, swarm, expire. remains
under construction. developed by jackie-jane, ryan holsopple &
niall jones.
      </div>
    </Draggable>
  );
}

export default text;
import React, { Component } from 'react';
import Aggregate from '../Aggregtate/AggregateOne'
import './Body.css'

function Body(props) {
  return (
    <div
      id='body'>
      <Aggregate/>
    </div>
  );
}

export default Body;
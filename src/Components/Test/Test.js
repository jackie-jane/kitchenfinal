import React from 'react';

function Test(props) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'black'
      }}>
      {props.children}
    </div>
  );
}
export default Test;
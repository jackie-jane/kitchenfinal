import React from 'react';
import { ReactComponent as Surprise } from 'media/svg/Surprise.svg';

function Body(props) {
  return (
    <body
      style={{
        background: `url(${Surprise})`
      }}>
      {props.children}
    </body>
  );
}

export default Body;
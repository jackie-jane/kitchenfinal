import React from 'react';
import NewWindow from 'react-new-window'


function Popup(props) {
  let newFile = Math.floor(Math.random() * 66)
  return (
    <NewWindow>
      <p>
       I am a meaningless void burst onto this planet waiting to die once more
      </p>
    </NewWindow>
  );
}

export default Popup;
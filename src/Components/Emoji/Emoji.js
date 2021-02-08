import React, { Component } from 'react';

class Emoji extends Component {

  render() {
    return (
      <div
        id='emoji'
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'black'
        }}
      >
      </div>
    );
  }
}

Emoji.propTypes = {

};

export default Emoji;
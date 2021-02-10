import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  state = {
    text: false
  }

  autoScroll = () => {
    let n = this.state.num
    if (n < 600) {
      console.log('bang')
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (
      <div
        id='footer'
        on
      >
      </div>
    );
  }
}

export default Footer
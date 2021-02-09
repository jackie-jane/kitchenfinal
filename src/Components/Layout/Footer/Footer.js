import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './Footer.css'

class Footer extends Component {
  state = {
    text: false
  }
  onEnterViewport() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    this.setState({
      text: true
    });
  }
  render() {
    return (
      <ScrollTrigger>
        <div
          id='footer'>
        </div>
      </ScrollTrigger>
    );
  }
}

export default Footer
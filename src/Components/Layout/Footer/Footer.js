import React, { Component } from 'react';
import Text from './text'
import './Footer.css'

class Footer extends Component {
  state = {
    visible: false,
    text: false,
    y: ''
  }

  componentDidMount() {
    window.addEventListener('scroll', this.autoScroll);
  }

  autoScroll = () => {
    let y = window.pageYOffset
    let w = window.innerHeight
    if ( (w * 3) - y < w ) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      this.setState({
        text: true
      })
    }
  }

  render() {
    return (
    <>
      <div
        id='footer'
        on
      >
      </div>
        {this.state.text ? 
          <Text />
          :
          null
        }
    </>
    );
  }
}

export default Footer
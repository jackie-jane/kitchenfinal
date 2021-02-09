import React, { Component } from 'react';

class Emoji extends Component {
  state = {
    y: '',
    windowH: '',
    WindowW: '',
    num: ''
  }

  componentDidMount() {
    setInterval(() => { this.handleScroll() }, 1000);
    const w = window
    this.setState({
      y: w.pageYOffset,
      windowH: w.innerHeight,
      WindowW: w.innerWidth,
      num: w.innerHeight - w.pageYOffset
    })
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

  handleScroll = () => {
    setInterval(() => { this.autoScroll() }, 1000)
    let w = window
    this.setState({
      y: w.pageYOffset,
      windowH: w.innerHeight,
      WindowW: w.innerWidth,
      num: w.innerHeight - w.pageYOffset
    })
  }

  render() {
    const s = this.state
    let size = 50 + (s.y / 3)
    let centerSize = size / 2
    let mpw = s.WindowW / 2
    let mph = s.windowH / 2
    let cl = mpw - centerSize
    let ct = mph - centerSize
    return (
      <img
        src='https://i.imgur.com/9DhSryH.png'
        alt='surprised emoji'
        style={{
          position: 'fixed',
          width: `${size}px`,
          height: `${size}px`,
          top: `${ct}px`,
          left: `${cl}px`,
          transition: `all .1s ease`,
          zIndex: 0
        }}
      />
    );
  }
}

export default Emoji;
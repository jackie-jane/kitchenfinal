import React, { Component } from 'react';

class Emoji extends Component {
  state = {
    y: 0,
    windowH: 766,
    WindowW: 1351,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
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
    let size = 25 + s.y
    let centerSize = size / 2
    let cl = (s.WindowW / 2) - centerSize
    let ct = (s.windowH / 2) - centerSize
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
          transition: `all .5s ease`,
          zIndex: 0
        }}
      />
    );
  }
}

export default Emoji;
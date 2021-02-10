import React, { Component } from 'react';
class Emoji extends Component {
  state = {
    y: '',
    windowH: '',
    WindowW: '',
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll()
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
        src='media/9DhSryH.png'
        alt='surprised emoji'
        style={{
          position: 'fixed',
          width: `${size}px`,
          height: `${size}px`,
          top: `${ct}px`,
          left: `${cl}px`,
          transition: `all 2s ease-in-out`,
          zIndex: 0
        }}
      />
    );
  }
}

export default Emoji;
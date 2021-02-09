import React, { Component } from 'react';

class Emoji extends Component {
  state = {
    y: '',
    windowH: '',
    WindowW: ''
  }
  componentDidMount() {
    setInterval(() => { this.handleScroll() }, 1000);
  }
  handleScroll = () => {
    let w = window
    this.setState({
      y: w.pageYOffset,
      windowH: w.innerHeight,
      WindowW: w.innerWidth
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
        style={{
          position: 'fixed',
          width: `${size}px`,
          height: `${size}px`,
          top: `${ct}px`,
          left: `${cl}px`,
          transition: `all .5s ease`
        }}
      />
    );
  }
}

export default Emoji;
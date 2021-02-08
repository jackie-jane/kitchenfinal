import React, { Component } from 'react';
import { randomClassBackground } from '../../Services/BackgroundServices'
class Black extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    url: '',
    x: '',
    y: '',
    class: ''
  }
  componentDidMount() {
    let number = Math.floor(Math.random() * 8)
    let newX = Math.floor(Math.random() * 101)
    let newY = Math.floor(Math.random() * 101)
    let newUrl = `media/Black/${number}.gif`
    let rc = randomClassBackground()
    this.setState({
      url: newUrl,
      x: newX,
      y: newY,
      class: rc
    })
  }
  render() {
    let s = this.state
    return (
      <img
        src={s.url}
        className={s.class}
        style={{
          position: 'absolute',
          top: `${s.y}vh`,
          left: `${s.x}vw`
        }}
      />
    );
  }
}
export default Black;
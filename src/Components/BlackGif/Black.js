import React, { Component } from 'react';
import Quadrant from '../Quadrants/Quadrant';
import './Black.css'
  class Black extends Quadrant {
  constructor(props) {
    super(props);
  }
  state = {
    visible: true
  }
  componentDidMount() {
    setInterval(() => { this.toggleVisibility() }, 10000)
  }
  toggleVisibility = () => {
    const s = this.state
    if (s.visible === false) {
      this.setState({
        visible: true
      })
    } else {
      this.setState({
        visible: false
      })
    }
  }
  render() {
    const s = this.state
    const p = this.props
    return (
    <>
      {
        s.visible ?
          <img
            src={p.url}
            alt=''
            className={p.size}
            key={p.key}
            src={{
              top: `${p.y}%`,
              left: `${p.x}%`
            }}
          />
          :
          <>
          </>
        }
      </>
    );
  }
}
export default Black;
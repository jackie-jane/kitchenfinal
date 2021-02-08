import React, { Component } from 'react';
import './Black.css'
class Black extends Component {
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
              src={p.src}
              alt={p.al}
              className={p.size}
              style={{
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
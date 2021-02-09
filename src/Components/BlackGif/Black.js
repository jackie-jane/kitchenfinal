import React, { Component } from 'react';
import './Black.css'
class Black extends Component {
  state = {
    visible: true,
  }
  componentDidMount() {
    let x = Math.ceil(Math.random() * 10) * 1000
    x += 5000
    setTimeout(() => { this.toggleVisibility() }, x)
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
              alt=''
              className={p.size}
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
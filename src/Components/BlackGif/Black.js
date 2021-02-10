import React, { Component } from 'react';
import './Black.css'
import lazyload from 'react-lazyload'
import LazyLoad from 'react-lazyload';
class Black extends Component {
  state = {
    visible: true,
  }
  componentDidMount() {
    let x = Math.ceil(Math.random() * 10) * 1000
    x +=
      setInterval(() => { this.toggleVisibility() }, x + 5000)
  }
  toggleVisibility = () => {
    const s = this.state
    if (s.visible === true) {
      this.setState({
        visible: false
      })
    } else {
      this.setState({
        visible: true
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
            null
        }
      </>
    );
  }
}
export default Black;
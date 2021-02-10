import React, { Component } from 'react';
import './Black.css'

class Black extends Component {
  state = {
    visible: true,
  }
  componentDidMount() {
    let x = (Math.ceil(Math.random() * 10) * 6000) + 5000
    setIntreval(() => { this.toggleVisibility() }, x)
  }
  toggleVisibility = () => {
    if (this.state.visible === true) {
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
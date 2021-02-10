import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './Black.css'

class Black extends Component {
  state = {
    visible: true,
  }
  componentDidMount() {
    let x = (Math.ceil(Math.random() * 10) * 6000) + 5000
    setTimeout(() => { this.toggleVisibility() }, x)
  }
  toggleVisibility = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const s = this.state
    const p = this.props
    return (
      <>
        {
          s.visible ?
            <LazyLoad
              offset={400}
              unmountIfInvisible={true}
            >
              <img
                src={p.src}
                alt=''
                className={p.size}
              />
            </LazyLoad>
            :
            null
        }
      </>
    );
  }
}
export default Black;
import React, { Component } from 'react';
import './Test.css'

class Test extends Component {
  state = {
    x: '',
    y: '',
    percent: ''
  }
  handleScroll = (el) => {
    el = Window
    let y = el.pageYOffset
    console.log(y)
  }
  render() {
    let s = this.state
    return (
      <div
        id='test'
        onScroll={this.handleScroll()}>
        {this.props.children}
      </div>
    );
  }
}

export default Test;
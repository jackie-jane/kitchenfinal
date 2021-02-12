import React, { Component } from 'react';
import Draggable from 'react-draggable';
import '../BlackGif/Black.css'
class RendClick extends Component {
  state = {
    one: true,
  };
  componentDidMount() {
    let x = Math.ceil(Math.random() * 10) * 1000
    setInterval(() => { this.toggleVisibilityOne() }, x + 2000)
  }
  toggleVisibilityOne = () => {
    if (this.state.one === true) {
      this.setState({
        one: false
      })
    } else {
      this.setState({
        one: true
      })
    }
  }
  render() {
    return (
      <>
        {this.state.one ?
          <Draggable>
            <img
              // id="layout" draggable="false"
              src={this.props.url}
              className={this.props.class}
              alt=''
              style={{
                position: 'absolute',
                top: `${this.props.y}px`,
                left: `${this.props.x}px`,
                transform: `${this.props.transform}`
              }}
            />
          </Draggable>
          :
          null
        }
      </>
    )
  }
}
export default RendClick;
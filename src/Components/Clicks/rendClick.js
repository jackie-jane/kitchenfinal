import React, { Component } from 'react';
import Draggable from 'react-draggable';
import '../BlackGif/Black.css'


class RendClick extends Component {
  state = {
    one: true,
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
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

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <>
        {this.state.one ?
          <Draggable
            {...dragHandlers}>
            <img
              src={this.props.url}
              className={this.props.class}
              alt=''
              style={{
                position: 'absolute',
                top: `${this.props.y}px`,
                left: `${this.props.x}px`,
                transform: `${this.props.transform}`,
                zIndex: 3,
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
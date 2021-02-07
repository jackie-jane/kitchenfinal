import React, { Component } from 'react';
import { ArrayBuilder, iterateArray } from '../../Services/Shared'

class Black extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    upcomingArr: [],
    renderArr: [],
    current: ''
  }
  componentDidMount() {
    let newUpcoming = ArrayBuilder(8, 'Black', 100)
    let newCurrent = newUpcoming[0]
    newUpcoming.push(newCurrent)
    newUpcoming.shift()
    { this.updateArray() }
    this.setState({
      upcomingArr: newUpcoming,
      current: newCurrent
    })
  }
  updateArray = () => {
    let s = this.state
    let response = iterateArray(s.upcomingArr, s.renderArr, s.current)
    this.setState({
      upcomingArr: response.upcoming,
      renderArr: response.render,
      current: response.current
    })
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
export default Black;
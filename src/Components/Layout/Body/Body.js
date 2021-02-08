import React, { Component } from 'react';
import './Body.css'

class Body extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    time: 1,
    keyArray: [],
    renderArray: [],
  }
  componentDidMount() {
    const list = Array.from(Array(1000).keys())
    let keyList = []
    list.forEach(el => {
      keyList.push(`1010${el}`)
    })
    setInterval(() => { this.handleTime() }, 60000);
    this.handleIntreval()
    this.setState({
      keyArray: keyList
    })
  }

  handleTime = () => {
    let newTime = this.state.time
    if (this.state.time < 5) {
      newTime += 1
    }
    this.setState({
      time: newTime
    })
  }
  handleIntreval = () => {

  }
  render() {
    return (
      <div
        id='bodyOne'>

      </div>
    );
  }
}
export default Body;

// function Body(props) {
//   return (
//     <div
//       id='body'
//       style={{

//       }}>
//       {props.children}
//     </div>
//   );
// }

// export default Body;
import React, { Component } from 'react';
import { createKeyArr } from '../../../Services/BackgroundServices'
import Aggregate from '../Aggregtate/AggregateOne'

class Gator extends Component {
  state = {
    backgroundArr: [],
    renderArr: []
  }
  componentDidMount() {
    let rendArr = createKeyArr(1212, 9)
    let backArr = createKeyArr(1111, 36)
    let bId = createKeyArr(0, 45)
    let finalRend = []
    let finalBack = []
    rendArr.forEach(el => {
      finalRend.push({
        key: el,
        id: bId[0]
      })
      bId.shift()
    })
    backArr.forEach(el => {
      finalBack.push({
        key: el,
        id: bId[0]
      })
      bId.shift()
    })
    setInterval(() => { this.backgroundUpdate() }, 20000)
    this.setState({
      backgroundArr: finalBack,
      renderArr: finalRend
    })
  }
  backgroundUpdate = () => {
    let x = this.state.backgroundArr.length
    if (x > 0) {
      let backA = this.state.backgroundArr
      let rendA = this.state.renderArr
      let finalRend = []
      for (let i = 0; i < 3; i++) {
        finalRend.push(backA[0])
        backA.shift()
      }
      this.setState({
        backgroundArr: backA,
        renderArr: rendA.concat(finalRend)
      })
    }
  }
  render() {
    return (
      <div
        id='gator'>
        {this.state.renderArr.map(el =>
          <Aggregate
            key={el.key}
            id={el.id}
          />
        )
        }
      </div>
    );
  }
}

export default Gator;
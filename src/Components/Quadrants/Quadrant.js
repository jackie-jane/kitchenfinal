import React, { Component } from 'react';
import { randomClassBackground } from '../../Services/BackgroundServices'
import './Quadrant.css'
class Quadrant extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    renderArr: [],
    currentArr: [],
    upcoming: [],
    multiplier: 1
  }
  componentDidMount() {
    const list = Array.from(Array(100).keys());
    let keyList = []
    list.map(el => {
      keyList.push(`1010${el}`)
    })
    { this.handleIntreval() }
    this.setState({
      upcoming: keyList
    })
  }
  handleIntreval = () => {
    let n = Math.ceil((Math.random() * 3))
    let time = (n * 5000) + 7000
    setInterval(() => { this.updateRender() }, time)
  }
  updateRender = () => {
    let n = Math.ceil((Math.random() * 3))
    let x = this.state.multiplier
    let numberToBeRendered = n + x
    let ntbrCopy = numberToBeRendered
    let nUpcoming = this.state.upcoming
    let final = this.state.renderArr
    while (ntbrCopy > 1) {
      let key = nUpcoming[0]
      let url = Math.floor(Math.random() * 8)
      let newX = Math.floor(Math.random() * 101)
      let newY = Math.floor(Math.random() * 101)
      let rc = randomClassBackground()
      let image = {
        'key': key,
        'x': newX,
        'y': newY,
        'url': `media/Black/${url}.gif`,
        'size': rc
      }
      final.push(image)
      nUpcoming.shift()
      ntbrCopy--
    }
    this.setState({
      renderArr: final,
      upcoming: nUpcoming,
      multiplier: numberToBeRendered
    })
  }
  render() {
    let renderOnPage = this.state.renderArr
    return (
      <>
        {renderOnPage.map(el => {
          <img
            src={`${el.url}`}
            key={el.key}
            className={el.size}
            alt=''
            style={{
              position: 'absolute',
              top: `${el.y}vh`,
              left: `${el.x}vw`,
              zIndex: 2
            }} />
        })}
      </>
    );
  }
}

export default Quadrant;
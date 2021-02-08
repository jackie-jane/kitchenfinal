import React, { Component } from 'react';
import { randomClassBackground } from '../../Services/BackgroundServices'
import Black from '../BlackGif/Black'
import './Quadrant.css'

class Quadrant extends Component {
  state = {
    renderArr: [],
    upcoming: [],
    multiplier: 1
  }
  componentDidMount() {
    const list = Array.from(Array(100).keys());
    let keyList = []
    list.forEach(el => {
      keyList.push(`1010${el}`)
    })
    this.handleIntreval()
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
      let imageInfo = {
        'id': key,
        'x': newX,
        'y': newY,
        'url': `media/Black/${url}.gif`,
        'size': rc
      }
      final.push(imageInfo)
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
      <div
        className='quad'>
        {renderOnPage.map(el =>
          <Black
            x={el.x}
            y={el.y}
            src={el.url}
            size={el.size}
            id={el.id}
            alt=''
          />
        )}
      </div>
    );
  }
}

export default Quadrant;
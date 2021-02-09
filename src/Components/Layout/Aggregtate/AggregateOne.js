import React, { Component } from 'react';
import { createKeyArr, randomClassBackground } from '../../../Services/BackgroundServices'
import Masonry from 'react-masonry-css'
import Black from '../../BlackGif/Black'
import './Aggregate.css'
class AggregateOne extends Component {
  state = {
    renderArr: [],
    upcoming: [],
    multiplier: 1
  }
  componentDidMount() {
    const keyList = createKeyArr('1010')
    let t = (Math.ceil(Math.random() * 3) * 5000) + 7000
    setInterval(() => { this.handleUpdate() }, t)
    this.setState({
      upcoming: keyList
    })
  }

  handleUpdate = () => {
    const s = this.state
    let ntbr = Math.ceil((Math.random() * 3)) + s.multiplier
    let ntbrc = ntbr
    let final = s.renderArr
    let newRender = []
    let uCopy = s.upcoming
    while (ntbrc > 1) {
      let k = uCopy[0]
      uCopy.shift()
      let url = Math.floor(Math.random() * 8)
      let rc = randomClassBackground()
      newRender.push({
        'id': k,
        'url': url,
        'size': rc
      })
      ntbrc--
    }
    this.setState({
      renderArr: final.concat(newRender),
      upcoming: uCopy,
      multiplier: ntbr
    })
  }
  render() {
    let s = this.state
    return (
      <div id='aggregateOne'>
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid-one"
          columnClassName="my-masonry-grid_column"
          style={{
            height: '100%',
            width: '100%',
          }}>
          {s.renderArr.map(el => {
            <Black
              src={el.url}
              key={el.id}
              className={el.size}
            />
          })}
        </Masonry>
      </div>
    );
  }
}
export default AggregateOne;
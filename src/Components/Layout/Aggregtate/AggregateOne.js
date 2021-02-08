import React, { Component } from 'react';
import { createKeyArr, imgGenerator, updateRender } from '../../../Services/BackgroundServices'
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
    let res = imgGenerator()
    setInterval(() => { this.handleUpdate() }, res)
    this.setState({
      upcoming: keyList
    })
  }

  handleUpdate = () => {
    const s = this.state
    let res = updateRender(s.multiplier, s.upcoming, s.renderArr)
    this.setState({
      renderArr: res.final,
      upcoming: res.keyList,
      multiplier: res.multiplier
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
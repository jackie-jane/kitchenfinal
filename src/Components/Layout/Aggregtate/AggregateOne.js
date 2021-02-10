import React, { Component } from 'react';
import { createKeyArr, randomClassBackground } from '../../../Services/BackgroundServices'
import Masonry from 'react-masonry-css'
import Black from '../../BlackGif/Black'
import LazyLoad from 'react-lazyload';
import './Aggregate.css'
class Aggregate extends Component {
  state = {
    renderArr: [],
    upcoming: [],
    multiplier: 1
  }
  componentDidMount() {
    uArr = Array.from(Array({ lenght: 10 }), () => Math.floor(Math.random() * 8))
    let finalArr = []
    uArr.forEach(el => {
      let rc = randomClassBackground()
      let imgInfo = {
        src: `media/Black/${el}.gif`,
        size: rc
      }
      finalArr.push(imgInfo)
    })
    let t = (Math.ceil(Math.random() * 3) * 5000) + 7000
    setInterval(() => { this.handleUpdate() }, t)
    this.setState({
      upcoming: finalArr
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
      let pushImg = uCopy[0]
      newRender.push(pushImg)
      uCopy.shift()
      ntbrc--
    }
    this.setState({
      renderArr: final.concat(newRender),
      upcoming: uCopy,
      multiplier: ntbr
    })
  }
  render() {
    let render = this.state.renderArr
    return (
      <LazyLoad
        offset={600}
        once={true}
        unmountIfInvisible={true}>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {render.map(el =>
            <Black
              {...el}
            />
          )}
        </Masonry>
      </LazyLoad>
    );
  }
}
export default Aggregate;
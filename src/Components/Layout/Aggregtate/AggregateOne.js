import React, { Component } from 'react';
import { createKeyArr, randomClassBackground } from '../../../Services/BackgroundServices'
import Masonry from 'react-masonry-css'
import Black from '../../BlackGif/Black'
import './Aggregate.css'

class Aggregate extends Component {
  state = {
    renderArr: [],
    upcoming: [],
    multiplier: 1
  }
  componentDidMount() {
    const keyList = createKeyArr(1010, 5)
    let t = (Math.ceil(Math.random() * 3) * 5000) + 7000
    setInterval(() => { this.handleUpdate() }, t)
    this.setState({
      upcoming: keyList
    })
  }

  handleUpdate = () => {
    if (this.state.renderArr.length < 20) {
      const s = this.state
      let ntbr = Math.ceil((Math.random() * 3)) + s.multiplier
      let ntbrc = ntbr
      let final = s.renderArr
      let newRender = []
      let uCopy = s.upcoming
      while (ntbrc > 1) {
        let k = uCopy[0]
        uCopy.shift()
        let urlNum = Math.floor(Math.random() * 8)
        let url = `media/Black/${urlNum}.gif`
        let rc = randomClassBackground()
        let imgInfo = {
          src: url,
          size: rc,
          id: k
        }
        newRender.push(imgInfo)
        ntbrc--
      }
      this.setState({
        renderArr: final.concat(newRender),
        upcoming: uCopy,
        multiplier: ntbr
      })
    }
  }
  render() {
    let render = this.state.renderArr
    return (
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {render.map(el =>
          <Black
            src={el.src}
            key={el.id}
            size={el.size}
          />
        )}
      </Masonry>
    );
  }
}
export default Aggregate;
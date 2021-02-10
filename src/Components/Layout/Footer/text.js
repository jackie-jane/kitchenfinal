import React, { Component } from 'react';
import axios from 'axios'

class Text extends Component {
  state = {
    textArr: [],
    render: false
  }
  async componentDidMount() {
    let res = await axios('textdb.json')
    let final = []
    let textArr = Array.from(Array({ length: 10 }), () => Math.floor(Math.random() * 12))
    textArr.forEach(el => {
      let size = Math.random() * (100 - 24) + 24
      let rangeH = window.innerHeight
      let rangeW = Math.ceil(Math.random() * 100)
      let textInfo = {
        position: 'absolute',
        text: `${res.data[el]}`,
        font: size,
        y: `${rangeH}px`,
        x: `${rangeW}px`
      }
      final.push(
        textInfo
      )
    })
    this.setState({
      textArr: final,
      render: true
    })
  }
  render() {
    return (
      <>
        {this.state.textArr.map(el =>
          <p
            className='randomText'
            style={{
              font: el.font,
              top: el.y,
              left: el.x
            }}
          >
            {el.text}
          </p>
        )
        }
      </>
    );
  }
}

export default Text;
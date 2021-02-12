import React, { Component } from 'react';
import { bodyClick, audioPlay, gifResize, flipGif, additionalMethods } from '../../Services/onClickMethods'
import RendClick from './rendClick'
import ReactAudioPlayer from 'react-audio-player'

class Clicks extends Component {
  state = {
    clickArr: [],
    audio: false,
    audioFile: ''
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
    setTimeout(() => { this.toggleAudio() }, 20000)
    setTimeout(() => { this.audioSetup() }, 30000)
  }

  handleClick = (e) => {
    let res = bodyClick(e, this.state.clickArr)
    let rand = Math.random() < 0.5
    let newArr = []
    if (rand === true) {
      let probCalc = additionalMethods()
      if (probCalc === 1) {
        newArr = gifResize(res)
      } else {
        newArr = flipGif(res)
      }
      this.setState({
        clickArr: newArr
      })
    } else {
      this.setState({
        clickArr: res
      })
    }
  }

  toggleAudio = () => {
    let x = Math.ceil(Math.random() * 6) + 10000
    setInterval(() => { this.audioSetup() }, 60000 + x);
  }

  audioSetup = () => {
    let res = audioPlay(this.state.audio)
    this.setState({
      audio: res.boolean,
      audioFile: res.audioFile
    })
  }

  render() {
    return (
      <>
        {this.state.clickArr.map(el =>
          <RendClick
            {...el}
          />
        )}
        {this.state.audio ?
          <ReactAudioPlayer
            src={`media/audio/${this.state.audioFile}.mp3`}
            autoPlay />
          :
          null}
      </>
    );
  }
}

export default Clicks;
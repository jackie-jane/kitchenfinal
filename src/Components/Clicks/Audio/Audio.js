import React, { Component } from 'react';
import { randomInt } from '../../../Services/Services'
import ReactAudioPlayer from 'react-audio-player'

class Audio extends Component {
  state = {
    audio: false,
    fileNum: ''
  }
  componentDidMount() {
    let audioFile = randomInt(7)
    this.setState({
      fileNum: audioFile
    })
  }
  render() {
    return (
      <ReactAudioPlayer
        src={`media/audio/${this.state.fileNum}.mp3`}
        autoPlay
      />
    );
  }
}

export default Audio;
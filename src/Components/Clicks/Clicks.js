import React, { Component } from 'react';
import { randomInt } from '../../Services/Services'
import ReactAudioPlayer from 'react-audio-player'
import RendClick from './rendClick'
import './Clicks.css'
import { randomClassBackground } from '../../Services/BackgroundServices';
import Body from '../Layout/Body/Body'
class Clicks extends Component {
  state = {
    userImgArray: [],
    renderedArray: [],
    currentImage: '',
    imageObject:
    {
      url: '',
      x: '',
      y: '',
      class: '',
      transform: 'none'
    },
    audio: false,
    play: true,
    audioFile: ''
  }

  componentDidMount() {
    let response = Array.from({ length: 500 }, () => Math.ceil(Math.random()))
    let final = []
    let current = ''
    response.forEach(el => {
      let batches = ['A', 'A', 'A', 'B', 'B', 'C']
      let imgBatch = batches[Math.floor(Math.random() * batches.length)]
      let url = ''
      if (imgBatch === 'A') {
        url = Math.floor(Math.random() * 30)
      } else if (imgBatch === 'B') {
        url = Math.floor(Math.random() * 43)
      } else {
        url = Math.floor(Math.random() * 24)
      }
      let img = {
        url: `media/${imgBatch}/${url}.gif`,
      }
      final.push(img)
    })
    current = final[0]
    final.shift()
    this.setState({
      userImgArray: final,
      currentImage: current,
    })
  }

  handleTrack = (e) => {
    let imgOb = this.state.currentImage
    let newClass = randomClassBackground()
    this.setState({
      imageObject: {
        url: imgOb.url,
        x: e.pageX,
        y: e.pageY,
        class: newClass,
      }
    });
  }

  handleClick = () => {
    this.imageUpload()
    this.audioPlay()
    let num = randomInt(100)
    if (num <= 10) {
      this.gifResize()
    } else if (num < 20 && num > 10) {
      this.flipGif()
    }
  }

  imageUpload = () => {
    let final = []
    let rendArr = this.state.renderedArray
    let upArr = this.state.userImgArray
    let current = this.state.userImgArray[0]
    final.push(this.state.imageObject)
    upArr.shift()
    this.setState({
      renderedArray: rendArr.concat(final),
      userImgArray: upArr,
      currentImage: current
    })
  }

  audioPlay = () => {
    if (this.state.audio === false && this.state.play === true) {
      let file = randomInt(7)
      this.setState({
        audio: true,
        audioFile: file,
        play: false
      })
    }
  }

  gifResize = () => {
    let imgArray = this.state.renderedArray
    imgArray.forEach(el => {
      let newClass = randomClassBackground()
      el.class = newClass
    })
    this.setState({
      renderedArray: imgArray
    })
  }

  flipGif = () => {
    let imgArray = this.state.renderedArray
    imgArray.forEach(el => {
      let rotate = randomInt(360)
      el.transform = `rotate(${rotate}deg)`
    })
    this.setState({
      renderedArray: imgArray
    })
  }
  onEnded = () => {
    this.setState({
      audio: false,
      play: true
    })
  }
  render() {
    return (
      <>
        <Body/>
        {this.state.audio ?
          <ReactAudioPlayer
            src={`media/audio/${this.state.audioFile}.mp3`}
            autoPlay
            onEnded={true}
          /> : null}
        <div
          id='userGeneratedImageContainer'
          onMouseMove={this.handleTrack}
          onClick={this.handleClick}>
          {this.state.renderedArray.map(el =>
            <RendClick
              {...el}
            />
          )}
        </div>
      </>
    );
  }
}

export default Clicks;
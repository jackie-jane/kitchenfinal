import React, { Component } from 'react';
import { pickFile } from '../../Services/onClickMethods'
import { randomClassBackground } from '../../Services/BackgroundServices'
import RendClick from './rendClick'

class Clicks extends Component {
  state = {
    clickArr: [],
  }
  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }
  handleClick = (e) => {
    const batches = ['A', 'A', 'A', 'B', 'B', 'C']
    let batch = batches[Math.floor(Math.random() * batches.length)]
    let rc = randomClassBackground()
    let file = pickFile(batch)
    let finalArr = this.state.clickArr
    let imgInfo = {
      'class': rc,
      'url': `media/${batch}/${file}.gif`,
      'x': e.pageX,
      'y': e.pageY,
      'transform': 'none'
    }
    finalArr.push(imgInfo)
    this.setState({
      clickArr: finalArr
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
      </>
    );
  }
}

export default Clicks;



// import React, { Component } from 'react';
// import { randomInt } from '../../Services/Services'
// import ReactAudioPlayer from 'react-audio-player'
// import RendClick from './rendClick'
// import './Clicks.css'
// import { randomClassBackground } from '../../Services/BackgroundServices';
// class Clicks extends Component {
//   state = {
//     renderedArray: [],
//     audio: false,
//     audioFile: ''
//   }

//   componentDidMount() {
//     // let response = Array.from({ length: 500 }, () => Math.ceil(Math.random()))
//     // let final = []
//     // let current = ''
//     // response.forEach(el => {
//       let batches = ['A', 'A', 'A', 'B', 'B', 'C']
//       let imgBatch = batches[Math.floor(Math.random() * batches.length)]
//       let url = ''
//       if (imgBatch === 'A') {
//         url = Math.floor(Math.random() * 30)
//       } else if (imgBatch === 'B') {
//         url = Math.floor(Math.random() * 43)
//       } else {
//         url = Math.floor(Math.random() * 24)
//       }
//       let img = {
//         url: `media/${imgBatch}/${url}.gif`,
//       }
//       final.push(img)
//     })
//     current = final[0]
//     final.shift()
//     this.setState({
//       userImgArray: final,
//       currentImage: current,
//     })
//   }

//   handleClick = () => {
//     this.imageUpload()
//     this.audioPlay()
//     let num = randomInt(100)
//     if (num <= 10) {
//       this.gifResize()
//     } else if (num < 20 && num > 10) {
//       this.flipGif()
//     }
//   }

//   imageUpload = () => {
//     let final = []
//     let rendArr = this.state.renderedArray
//     let upArr = this.state.userImgArray
//     let current = this.state.userImgArray[0]
//     final.push(this.state.imageObject)
//     upArr.shift()
//     this.setState({
//       renderedArray: rendArr.concat(final),
//       userImgArray: upArr,
//       currentImage: current
//     })
//   }

//   audioPlay = () => {
//     if (this.state.audio === false) {
//       let file = randomInt(7)
//       this.setState({
//         audio: true,
//         audioFile: file,
//         play: false
//       })
//     }
//   }

//   gifResize = () => {
//     let imgArray = this.state.renderedArray
//     imgArray.forEach(el => {
//       let newClass = randomClassBackground()
//       el.class = newClass
//     })
//     this.setState({
//       renderedArray: imgArray
//     })
//   }

//   flipGif = () => {
//     let imgArray = this.state.renderedArray
//     imgArray.forEach(el => {
//       let rotate = randomInt(360)
//       el.transform = `rotate(${rotate}deg)`
//     })
//     this.setState({
//       renderedArray: imgArray
//     })
//   }
//   onEnded = () => {
//     this.setState({
//       audio: false
//     })
//   }
//   render() {
//     return (
//       <>
//         {this.state.audio ?
//           <ReactAudioPlayer
//             src={`media/audio/${this.state.audioFile}.mp3`}
//             autoPlay
//             onEnded
//           /> : null}
//         <div
//           id='userGeneratedImageContainer'
//           onMouseMove={this.handleTrack}
//           onClick={this.handleClick}>
//           {this.state.renderedArray.map(el =>
//             <RendClick
//               {...el}
//             />
//           )}
//         </div>
//       </>
//     );
//   }
// }

// export default Clicks;
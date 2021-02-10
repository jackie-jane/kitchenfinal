import React, { Component } from 'react';
import Emoji from '../../Emoji/Emoji'
import Gator from '../Aggregtate/Gator'
import Footer from '../Footer/Footer'
import './Body.css'

class Body extends Component {
  state = {
    footer: false,
    y: '',
    windowH: '',
    WindowW: '',
    emojiSize: {

    }
  }
  componentDidMount() {
    setTimeout(() => { this.renderFooter() }, 216000)
  }
  renderFooter = () => {
    this.setState({
      footer: true
    })
  }
  handleScroll = () => {
    console.log('bang')
    let w = window
    const s = this.state
    let size = 50 + (w.pageYOffset / 3)
    let centerSize = size / 2
    let mpw = w.innerWidth / 2
    let mph = w.innerHeight / 2
    let cl = mpw - centerSize
    let ct = mph - centerSize
    this.setState({
      emojiSize: {
        radius: size,
        centerLeft: cl,
        centerTop: ct
      }
    })
  }
  render() {
    return (
      <div id='Body'>
        <Emoji
          {...this.state.emojiSize}
        />
        <Gator />
        {this.state.footer ?
          < Footer />
          :
          <>
          </>
        }
      </div>
    );
  }
}
export default Body;

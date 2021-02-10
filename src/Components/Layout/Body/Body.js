import React, { Component } from 'react';
import Emoji from '../../Emoji/Emoji'
import Gator from '../Aggregtate/Gator'
import Footer from '../Footer/Footer'
import './Body.css'

class Body extends Component {
  state = {
    footer: false,
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

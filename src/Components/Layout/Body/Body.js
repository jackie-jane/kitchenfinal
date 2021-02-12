import React, { Component } from 'react';
import Emoji from '../../Emoji/Emoji'
import Gator from '../Aggregtate/Gator'
import Footer from '../Footer/Footer'
import './Body.css'
import Clicks from '../../Clicks/Clicks';
import PopUp from '../../PopUp/PopUp'

class Body extends Component {
  state = {
    footer: false,
    check: true,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.renderFooter);
    setTimeout(() => { this.renderFooter() }, 90000)
  }
  renderFooter = () => {
    let y = window.pageYOffset
    let w = window.innerHeight
    if (y > w * 2 && this.state.check === true) {
      this.setState({
        footer: true,
        check: false
      });
    }
  }
  render() {
    return (
      <div id='body'
        onClick={this.handleClick}>
        <Clicks/>
        <PopUp />
        <Emoji
          {...this.state.emojiSize}
        />
        <Gator />
        {this.state.footer ?
          < Footer />
          :
          null
        }
      </div>
    );
  }
}
export default Body;

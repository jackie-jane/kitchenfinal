import React, { Component } from 'react';

class Quadrant extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    renderArr: [],
    currentArr: [],
    Upcoming: []
  }
  componentDidMount() {
    const list = Array.from(Array(100).keys());
    let keyList = []
    list.map(el => {
      keyList.push(`1010${el}`)
    })
    this.setState({
      upcoming: keyList
    })
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

Quadrant.propTypes = {

};

export default Quadrant;
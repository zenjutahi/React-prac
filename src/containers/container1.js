import React, { Component } from 'react';

class Container1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stateprop1: "My initial state"
    }
  }

  // Must use setstate when mutating state
  changeState = () => (
    this.setState({
      stateprop1: "New State currently"
    })
  )
  render () {
    return (
      <div>
        <span>His Nickname is: </span>{this.props.nickname}
        <hr />
        {this.state.stateprop1}
        <hr />
        <button onClick={() => this.changeState()}>Change State</button>
      </div>
    )
  }
}

export default Container1;

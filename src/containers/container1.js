import React, { Component } from 'react';

class Container1 extends Component {
  render () {
    return (
      <div>
        <span>His Nickname is: </span>{this.props.nickname}
      </div>
    )
  }
}

export default Container1;

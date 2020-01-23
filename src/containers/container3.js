import React, { Component } from 'react';

class Container3 extends Component {

  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.value)
  }

  render () {
    return (
      <div>
        <p>Current state: {this.state.value}</p>
        <form onSubmit={this.handleSubmit}>
          <label> Name </label>
          <input id="word" onChange={this.handleChange} type="text" />
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default Container3;


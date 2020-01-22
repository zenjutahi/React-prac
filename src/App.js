import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1'
import Container2 from './containers/container2'
import "./App.css"
import { style } from "./styles"

class App extends Component {

  render() {
    const  name = "zenj"

    return (
      <div className="App">
        <button>{name}</button>
        <hr />
        <div style={style}>
          Style
        </div>
        <hr />
        <Container2 nickname="G!, to display after state change"/>
      </div>
    )
  }
}

export default App;

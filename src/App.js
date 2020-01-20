import React, { Component } from 'react';
import Component1 from './functional/component1'
import "./App.css"
import { style } from "./styles"

class App extends Component {

  render() {
    const  name = "zenj"

    return (
      <div className="App">
        <button>{name}</button>
        <div style={style}>
          Style
        </div>
        <Component1 />
      </div>
    )
  }
}

const Appinstance = new App()

console.log(Appinstance)

export default App;

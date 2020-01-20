import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1'
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
        <Component1 name="zenj" age={25}/>
        <Container1 nickname="G!"/>
      </div>
    )
  }
}

const Appinstance = new App()

console.log(Appinstance)

export default App;

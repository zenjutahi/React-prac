import React, { Component } from 'react';
import "./App.css"
import * as styles from "./styles"

class App extends Component {

  render() {
    const  name = "zenj"

    return (
      <div className="App">
        <button>{name}</button>
        <div style={styles.style}>
          Style
        </div>
      </div>
    )
  }
}

const Appinstance = new App()

console.log(Appinstance)

export default App;

import React, { Component } from 'react';
import "./App.css"
class App extends Component {

  render() {
    const  name = "zenj"
    return (
      <div className="App">
        <button>{name}</button>
      </div>
    )
  }
}

const Appinstance = new App()

console.log(Appinstance)

export default App;

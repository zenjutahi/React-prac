// import React, { Component } from 'react';
// import Component1 from '../functional/component1';

// class Container1 extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       stateprop1: "My initial state",
//       stateprop2: 5
//     }
//   }

//   // Must use setstate when mutating state
//   changeState = () => (
//     this.setState((prevState, props) => ({
//       stateprop1: props.nickname,
//       stateprop1: prevState.stateprop1 + " lol"
//     })
//   ))

//   changeNoState = () => (
//     this.setState((prevState, props) => ({
//       stateprop2: prevState.stateprop2 + 1
//     })
//   ))

//   render () {
//     return (
//       <div>
//         <span>His Nickname is: </span>{this.props.nickname}
//         <hr />
//         {this.state.stateprop1}
//         <hr />
//         <button onClick={() => this.changeState()}>Change State</button>
//         <hr />
//         <button onClick={() => this.changeNoState()}>Change No. State {this.state.stateprop2}</button>
//         <hr />
//         <Component1 name="zenj" prop1={this.state.stateprop2}/>
//       </div>
//     )
//   }
// }

// export default Container1;

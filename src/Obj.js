import React, { Component } from 'react';

class Obj extends Component {


  render() {
    const var1 = {
      key1: "Some Data"
    }

    return (
      <div className="Obj">
        {React.createElement(
          'div',
          {className: 'Obj'},
          var1.key1
        )}
      </div>
    )
  }
}


export default Obj;

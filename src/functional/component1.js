import React from 'react';

const Component1 = props => (
  <div>
    {props.name}
   <span> is </span>
    {props.prop1}
    Years Old
  </div>
);

// the code above is similar to this

// const Component1 = props => {
//   return ( <div>
//     Componetnt1
//   </div>
//   )};

export default Component1;

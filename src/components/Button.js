import React from "react";
import { useState } from "react";

// const Button = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click me!</button>
//     </>
//   );
// };

function sayHello() {
  console.log("HELLO");
}

class Button extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handleButtonClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleButtonClick}>{this.props.label}</button>
      </>
    );
  }
}

export default Button;

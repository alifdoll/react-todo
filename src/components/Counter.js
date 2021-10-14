import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  var test = "a";
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    test = "Everytime";
    return () => {
      test = "Everytime Before Next Render";
    };
  }, []);

  return (
    <div>
      <p>You Spent {counter} second</p>
      <p>Test {test} second</p>
    </div>
  );
};

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const startTimer = useEffect(() => {
//     setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => {
//       clearInterval(startTimer);
//     };
//   }, []);

//   const stoptTimer = useEffect(() => {
//     clearInterval(startTimer);
//   });
//   return (
//     <div>
//       <span>You Spent {count} secondss</span>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stoptTimer}>Stop</button>
//     </div>
//   );
// };

export default Counter;

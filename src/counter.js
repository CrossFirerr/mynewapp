import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(120);
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;

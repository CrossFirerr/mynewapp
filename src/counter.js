import { useState } from "react";

export const Counter = () => {
  //   let counter = 12;
  const [counter, setCounter] = useState(122);

  const increase = () => {
    setCounter(counter + 1);
  };
  //   const decrease = () => {
  //     setCounter(counter - 1);
  //   };
  //   const style = {
  //     background: "red",
  //     paddingTop: "2rem",
  //     textAlign: "center",
  //   };

  return (
    <div
      style={{
        background: "red",
        paddingTop: "2rem",
        textAlign: "center",
      }}
    >
      <h1 className="title">{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

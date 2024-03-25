import React, { useState } from "react";

export const Form = () => {
  //   let str = "";
  const [str, setStr] = useState("");

  const handlOnCheange = (e) => {
    setStr(e.target.value);
  };

  return (
    <div>
      {str}
      <form action="">
        <input onChange={handlOnCheange} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

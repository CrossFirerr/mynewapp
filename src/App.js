import "./App.css";
import HeadLine from "./Headline";
import { News as MyNews } from "./Headline";
import User from "./user";

import Counter from "./counter";

const App = () => {
  const info = " ABC News paper";

  return (
    <>
      <div className="">
        <Counter />
        <h1>{info}</h1>
        <HeadLine></HeadLine>
        <MyNews></MyNews>
        <User></User>
      </div>
    </>
  );
};

export default App;

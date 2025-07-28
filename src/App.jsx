import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  function handleCLick() {
    setCount(count + 1);
  }
  function double() {
    console.log("Double");

    return count * count;
  }

  const expensive = useMemo(double, [count]);
  console.log(expensive);
  

  return (
    <>
      <h1>Counter1: {count}</h1>
      <h2>Double:{expensive}</h2>
      <button type="button" onClick={handleCLick}>
        Click{" "}
      </button>
      <h2>Counter2: {count1}</h2>
      <button
        onClick={() => {
          setCount1(count1 - 1);
        }}
      >
        decrement
      </button>
    </>
  );
}

export default App;

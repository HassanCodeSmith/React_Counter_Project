import { useState } from "react";
import "./App.css";

function App() {
  // useState Hook
  let [counter, setCounter] = useState(0);

  // Add Value
  const addValue = () => {
    if (counter !== 20) {
      counter += 1;
      setCounter(counter);
    }
  };

  // Remove Value
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

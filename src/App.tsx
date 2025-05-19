import { useState } from "react";
import Item from "./components/Item";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const fn = () => {
    console.log("I am fn");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-start items-center">
        <h1>Count: {count}</h1>
        <button
          className="p-2 bg-blue-600 rounded text-white"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <Item fun={fn} />
      </div>
    </div>
  );
}

export default App;

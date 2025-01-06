import { useState } from "react";
import { calculateScore } from "../utils/calculateScore";

export function CalculateScoreForm() {
  const [num, setNum] = useState("");
  const [counter, setCounter] = useState(0);

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum(event.target.value);
  };

  return (
    <div className="p-4 rounded shadow-md inline-flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Number</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          id="name"
          placeholder="Enter your name"
          value={num}
          onChange={textChangeHandler}
        />
      </div>

      <div>The score is :{calculateScore(+num)}</div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out mt-4"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Count
      </button>
      <div>Counter {counter}</div>
    </div>
  );
}

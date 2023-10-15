import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="Main">
      <div data-testid="Counter">{counter}</div>
      <button
        data-testid="Increment"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        data-testid="Decrement"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

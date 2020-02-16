import React, { useState, useRef } from "react";

export default function App() {
  const [state, setState] = useState({ count: 0 });
  const handleClick = () =>
    setState(state => ({ ...state, count: state.count + 1 }));
  return (
    <div className="container">
      <h1>Counter</h1>
      <p>
        <button onClick={handleClick}>Increment</button>
      </p>
      <p className="display-count">{state.count}</p>
    </div>
  );
}

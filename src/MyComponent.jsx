/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState();

  useEffect(() => {
    document.title = `Count:${count}`;
  });

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setcolor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Sub</button>
      <button onClick={changeColor}>Change</button>
    </>
  );
}

export default MyComponent;

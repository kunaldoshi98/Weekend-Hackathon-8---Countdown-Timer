import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  let [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => {
              if (event.target.value > 0) setCounter(event.target.value);
              else setCounter(0);
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{counter}</div>
    </div>
  );
};

export default App;

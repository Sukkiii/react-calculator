import "./App.css";
import React, { useState } from "react";
function App() {
  const [calc, setCalc] = useState("0");
  const getNumber = (_) => {
    setCalc((prev) => prev + _.target.value);
  };
  const clearInput = () => {
    setCalc("0");
  };

  return (
    <div className="calculator-wrap">
      <div className="value-wrap">
        <input className="value-input" value={calc}></input>
      </div>
      <div className="button-wrap">
        <button onClick={getNumber} value="+">
          +
        </button>
        <button onClick={getNumber} value="-">
          -
        </button>
        <button onClick={getNumber} value="*">
          *
        </button>
        <button onClick={getNumber} value="/">
          /
        </button>
        <button onClick={getNumber} value="7">
          7
        </button>
        <button onClick={getNumber} value="8">
          8
        </button>
        <button onClick={getNumber} value="9">
          9
        </button>
        <button onClick={clearInput} value="C">
          c
        </button>
        <button onClick={getNumber} value="4">
          4
        </button>
        <button onClick={getNumber} value="5">
          5
        </button>
        <button onClick={getNumber} value="6">
          6
        </button>
        <button className="equal-button" onClick={getNumber} value="=">
          =
        </button>
        <button onClick={getNumber} value="1">
          1
        </button>
        <button onClick={getNumber} value="2">
          2
        </button>
        <button onClick={getNumber} value="3">
          3
        </button>
        <button className="zero-button" onClick={getNumber} value="0">
          0
        </button>
        <button onClick={getNumber} value=".">
          .
        </button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
function App() {
  const [calc, setCalc] = useState("0");
  const operators = ["/", "*", "+", "-", "."];
  const getNumber = (_) => {
    setCalc((prev) => {
      const currentValue = _.target.value;
      const lastChar = prev.charAt(prev.length - 1);

      if (operators.includes(lastChar) && operators.includes(currentValue))
        return prev;

      return prev === "0" ? _.target.value : prev + _.target.value;
    });
  };
  const deleteBtn = () => {
    let newStr = calc.slice(0, -1);
    setCalc((prev) => newStr);
  };
  const clearInput = () => {
    setCalc("0");
  };
  const calculateInput = () => {
    setCalc((prev) => eval(prev).toString());
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
          C
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
        <button className="equal-button" onClick={calculateInput} value="=">
          =
        </button>
        <button className="deleteBtn" onClick={deleteBtn}>
          del
        </button>
      </div>
    </div>
  );
}

export default App;

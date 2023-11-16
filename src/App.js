import "./App.css";
import React, { useState } from "react";

function App() {
  const [calc, setCalc] = useState("0");

  const operators = ["/", "*", "+", "-"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getNumber = (_) => {
    setCalc((prev) => {
      const currentValue = _.target.value;
      const lastChar = prev.charAt(prev.length - 1);

      if (currentValue === "." && prev.includes(".")) {
        return prev;
      }

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
        {operators.map((operator, i) => {
          return (
            <button key={i} onClick={getNumber} value={operator}>
              {operator}
            </button>
          );
        })}
        <button className="clear-button" onClick={clearInput} value="C">
          C
        </button>
        <button className="zero-button" onClick={getNumber} value="0">
          0
        </button>
        <button className="equal-button" onClick={calculateInput} value="=">
          =
        </button>
        <button className="delete-button" onClick={deleteBtn}>
          del
        </button>
        {numbers.map((number, i) => {
          return (
            <button key={i} onClick={getNumber} value={number}>
              {number}
            </button>
          );
        })}
        <button onClick={getNumber} value=".">
          .
        </button>
      </div>
    </div>
  );
}

export default App;

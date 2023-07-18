import React, { useState } from "react";
import "./index.css";
import Button from "../Button";
import Display from "../Display";

const Calculadora = () => {
  const [memory, setMemory] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (buttonLabel) => {
    switch (buttonLabel) {
 
      case "=":
        calculateResult();
        break;
      case "C":
        setDisplayValue("0");
        break;
      default:

        if (displayValue === "0" || displayValue === "Error") {
          setDisplayValue(buttonLabel);
        } else {
          setDisplayValue(displayValue + buttonLabel);
        }
        break;
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="button-container">

        <Button label="7" onClick={() => handleButtonClick("7")} />
        <Button label="8" onClick={() => handleButtonClick("8")} />
        <Button label="9" onClick={() => handleButtonClick("9")} />
        <Button label="/" onClick={() => handleButtonClick("/")} />
        <Button label="4" onClick={() => handleButtonClick("4")} />
        <Button label="5" onClick={() => handleButtonClick("5")} />
        <Button label="6" onClick={() => handleButtonClick("6")} />
        <Button label="*" onClick={() => handleButtonClick("*")} />
        <Button label="1" onClick={() => handleButtonClick("1")} />
        <Button label="2" onClick={() => handleButtonClick("2")} />
        <Button label="3" onClick={() => handleButtonClick("3")} />
        <Button label="-" onClick={() => handleButtonClick("-")} />
        <Button label="0" onClick={() => handleButtonClick("0")} />
        <Button label="." onClick={() => handleButtonClick(".")} />
        <Button label="=" onClick={() => handleButtonClick("=")} />
        <Button label="+" onClick={() => handleButtonClick("+")} />
        <Button label="C" onClick={() => handleButtonClick("C")} />
      </div>
    </div>
  );
};

export default Calculadora;

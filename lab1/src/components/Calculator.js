import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
  const [value, setValue] = useState("");
  
  const handleClick = (input) => {
    if (input === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else if (input === "C") {
      setValue("");
    } else {
      setValue(value + input);
    }
  };

  return (
    <div className="calculator">
      <Display value={value} />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"].map((btn) => (
          <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const INPUT_FIELD_COUNT = 3;
  const [inputArr, setInputArr] = useState(
    new Array(INPUT_FIELD_COUNT).fill("")
  );
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    if (!isFinite(value)) return;

    const newArr = [...inputArr];
    const newValue = value.trim();

    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    if (newValue && index < INPUT_FIELD_COUNT - 1) {
      newValue && refArr.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    console.log({ e }, { index });
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index >= 0) {
      e.preventDefault();
      const targetEle = refArr.current[index - 1];
      if (targetEle) {
        targetEle.focus();
        targetEle.select();
        // const val = targetEle.value;
        // targetEle.value = "";
        // targetEle.value = val;
      }
    }
    if (e.key === "ArrowRight" && index < INPUT_FIELD_COUNT - 1) {
      refArr.current[index + 1]?.focus();
    }
  };
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  console.log(inputArr);
  return (
    <div className="App">
      <h1>OTP Verifier</h1>

      <div className="otp-separater">
        {inputArr.map((inputItem, idx) => (
          <input
            ref={(el) => (refArr.current[idx] = el)}
            key={`otp-key-${idx}`}
            value={inputArr[idx]}
            onChange={(e) => handleChange(e.target.value, idx)}
            className="otp-input"
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>
    </div>
  );
}

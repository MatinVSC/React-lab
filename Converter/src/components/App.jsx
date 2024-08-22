import React, { useRef, useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [optionFrom, setOptionFrom] = useState(null);
  const [optionTo, setOptionTo] = useState(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handelChange = (e) => {
    const value = e.target.value;
    setInput(value)
  };

  const handelOptionFrom = (e) => {
    setOptionFrom(e.target.value);
  };

  const handelOptionTo = (e) => {
    setOptionTo(e.target.value);
  };

  const handelResult = () => {
    setResult((optionFrom / optionTo) * input)
  }

  return (
    <>
      <div className="converter-form">
        <Input label={"Amount"} onChange={handelChange}/> 

        <div className="row">

          <Select label={"From"} items={units} onChange={handelOptionFrom}/>
          <Select label={"To"} items={units} onChange={handelOptionTo}/>

          <button onClick={handelResult}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;

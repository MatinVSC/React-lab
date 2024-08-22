import { useState } from "react";

const useInput = (initialValue) => {

  const [value, setValue] = useState(initialValue);

  const handelChange = (event) => {
    setValue(event.target.value);
  };
  
  return {
    value,
    onChange: handelChange,
  };
};

export default useInput;

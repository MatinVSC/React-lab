import { useState, useEffect, useRef } from 'react';
import getBanks from '../../services/api.js';
import './style.css';

function CardInput({onSetInputChar, inputChar}) {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [bankName, setBankName] = useState('********');
  const [bankData, setBankData] = useState([]);
  
 const inputRef = useRef([]);
 

  useEffect(() => {
    getBanks()
    .then(data => setBankData(data))

    return () => getBanks();

  }, []);
  
  
  const handleInputChange = (index, value) => {
    const updateInput = [...inputs];
    updateInput[index] = value;
    setInputs(updateInput)
    const inputValue = updateInput.join('');

    if (inputValue.length === 6) {
      const copyBank = [...bankData];
      const selectedBankName = copyBank.find(item => item.pan.includes(inputValue));
      setBankName(selectedBankName.name.fa); 
    };

    if (inputRef.current[index].value.length === 4) {
      if (inputRef.current[index + 1] !== undefined) {
        inputRef.current[index + 1].focus();
      } 
    }; 

  };

  const handleSubmit = () => {
    const inputLengths = inputs.join('');

    if (inputLengths.length === 16) {
      const userCard = {
        number: inputs.join(''),
        name: bankName
      }
      onSetInputChar(prev => [...prev, userCard])
    }
  };


  return (
    <div className="card-container">
      <div className="card-header">
        <div>{bankName}</div>
      </div>
      <div className="card-input-container">
        {inputs.map((input, idx) => (
          <input
            key={idx}
            className="card-input"
            maxLength={4}
            value={input}
            onChange={(e) => handleInputChange(idx, e.target.value)}
            ref={(el) => {
              inputRef.current[idx] = el;
            }}
          />
        ))}
      </div>
      <div className="button-container ">
        <button className="button" onClick={handleSubmit}>
          افزودن
        </button>
      </div>
    </div>
  );
}

export default CardInput;

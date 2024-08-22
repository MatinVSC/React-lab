import { useRef, useState } from 'react';
import LoginForm from './componts/LoginForm';
import SendPassword from './componts/Password';
import WelcomePage from './componts/Welcome'

function App() {
  const [number, setNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [hasVerify, setHasVerify] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [error, setError] = useState(false);
  const otpGenerator = useRef(Math.floor(Math.random() * 100000))

  // const otpGenerator = Math.floor(Math.random() * 100000)

  const pattern = /^(\+989|0?9)\d{2}[- ]?(\d{3})[- ]?(\d{4})$/;

  const handelChange = (event) => {
   const value = event.target.value;
   setNumber(pattern.test(value));
  };

  const handelSendPassword = () => {
    number && setShowOtp(true);
    console.log(otpGenerator.current);
  };

  const handelVerification = (event) => {
    const value = event.target.value;
    value == otpGenerator.current && setHasVerify(true);
  };

  const handelWelcome = () =>{
    if (hasVerify) { 
      setShowWelcome(true);
      setShowOtp(false);
    } else {
      setError(true);
    }
  };


  return (
    <>
      {showOtp ? (
        <SendPassword 
        onClick={handelWelcome}
        onChange={handelVerification}
        error={error}/>
      ) : showWelcome ? (
        <WelcomePage />
      ) : (
        <LoginForm 
        number={number}
        onChange={handelChange} 
        onClick={handelSendPassword}/>
      )}
    </>
  );
}

export default App

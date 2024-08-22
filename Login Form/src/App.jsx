import React, { useState } from "react";

import './assets/style.css';

import Input from "./components/common/input";
import useInput from "./customHooks/useInput";

function App () {
  const [hasErrorEmail, setHasErrorEmail] = useState(false);
  const [hasErrorPassword, setHasErrorPasswoed] = useState(false);

  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const patternEmail = /\S+@\S+\.\S+/;
    const patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    setHasErrorEmail(patternEmail.test(email.value));
    setHasErrorPasswoed(patternPassword.test(password.value));

    console.log(hasErrorEmail);
    console.log(hasErrorPassword);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input        
            placeholder="Email"
            className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            value={email.value}
            onChange={email.onChange}
          />
          {email.value.length < 8 && (
            <p className="text-red-500 text-sm mb-2">Email must be at least 8 characters long.</p>
          )}
          {!hasErrorEmail && (
            <p className="text-red-500 text-sm mb-2">Please enter a valid email address.</p>
          )}
          <Input
            placeholder="Password"
            className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password.value}
            onChange={password.onChange}
          />
          {password.value.length < 8 && (
            <p className="text-red-500 text-sm mb-2">Password must be at least 8 characters long.</p>
          )}
          {!hasErrorPassword && (
            <p className="text-red-500 text-sm mb-2">Please enter a valid password address.</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

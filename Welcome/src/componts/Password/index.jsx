import React from "react";
import "./index.css";



const SendPassword = ({onChange, onClick, error}) => {

return (
    <>
        <div className="container">
		<h1>ENTER OTP</h1>
		<p className="show">Please view the console</p>
		<div className="userInput">
			<input onChange={onChange} className="inputPass" type="text" id='ist' maxLength="5" />
		</div>
		{error && <p className="error">Verification Code is not Valid</p>}
		<button onClick={onClick}>CONFIRM</button>
	    </div>
    </>
    );
};


export default SendPassword
import React, { useState } from "react";
import "./index.css"



const LoginForm = ({onChange, number, onClick}) => {

	const handelSubmit = (event) => {
		event.preventDefault()
	};
    

    return (
        <>
	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form onSubmit={handelSubmit}>
					<input onKeyUp={onChange} type="text" name="pswd" placeholder="Number" />
					{!number && (
						<p className="error">Number is not valid</p>
					)}
					<button onClick={onClick}>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Number" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div>
	    </div>
    </>
    )
};


export default LoginForm


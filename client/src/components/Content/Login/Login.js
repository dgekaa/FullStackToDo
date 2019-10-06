import React from "react";

import { useSelector } from "react-redux";

import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
					name="login"
					placeholder="Login"
					component="input"
				/>
			</div>
			<div>
				<Field 
					name="password"
					placeholder="Password"
					component="input"
				/>
			</div>
			<div>
				<label>Remember:
					<Field 
						name="remember"
						component="input"
						type="checkbox"
					/>
				</label>
			</div>
			<div>
				<button>
					Login
				</button>
			</div>
	    </form>
	)

}
	
const LoginReduxForm = reduxForm({
	form: "LoginForm"
})(LoginForm);	

const Login = () => {
	const _onSubmit = data => {
		console.log(data, "dataSubmit");
	}

	return (
		<div className="wrapper">
        <h2>Login</h2>
		<LoginReduxForm 
			onSubmit={_onSubmit}
		/>
   		</div>
	)

}
    

export default Login;
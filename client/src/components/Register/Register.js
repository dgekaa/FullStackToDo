import React from "react";

import {postRegisterForm} from "../../store/_actions/register"

import { useSelector, useDispatch } from "react-redux";

import {requiredField} from "../_Validators/validation"

import { reduxForm, Field } from "redux-form";

import { InputText } from "../_Forms/Forms";

const RegisterForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder="Login"
					name="login"
					component={InputText}
					validate={[requiredField]}
				/>
			</div>
			<div>
				<Field placeholder="Password"
					name="password"
					component={InputText}
					validate={[requiredField]}
				/>
			</div>
			<div>
				<Field placeholder="Repassword"
					name="repassword"
					component={InputText}
					validate={[requiredField]}
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
	
const RegisterReduxForm = reduxForm({
	form: "RegisterForm"
})(RegisterForm);	

const Register = () => {
	const dispatch = useDispatch();

	const _onSubmit = data => {
		dispatch(postRegisterForm("http://localhost:8080/register", data))
	}

	return (
		<div className="wrapper">
        <h2>Login</h2>
		<RegisterReduxForm 
			onSubmit={_onSubmit}
		/>
   		</div>
	)

}
    

export default Register;
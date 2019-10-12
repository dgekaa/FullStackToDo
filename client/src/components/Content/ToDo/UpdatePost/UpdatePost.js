import React, { Component } from "react";

import { connect, useSelector, useDispatch } from "react-redux";

import { reduxForm, Field } from "redux-form";

import "./updatePost.css";

import { updatePost, canUpdatePost } from "../../../../store/_actions/toDo.js";

import { InputText, InputDate } from "../../../_Forms/Forms.js"

import { maxLengthCreator } from "../../../_Validators/validation.js";

const maxLength15 = maxLengthCreator(15);

const FormUpdatePost = props => {
	const dispatch = useDispatch();
	const toDo = useSelector(state => state.toDo.updatingPost);

	return(
		<form onSubmit={props.handleSubmit}>
			<Field placeholder={toDo.title}
				name="title"
          		component={InputText}
          		validate={[maxLength15]}
			/><br/>
			<Field placeholder={toDo.title}
				name="description"
          		component={InputText}
          		validate={[maxLength15]}
			/><br/>
			<Field name="dateTo"
          		component={InputDate}
          	/><br/>
			<button>Update</button>
			<div 
				className="cancelBtn"
				onClick={() => {dispatch(canUpdatePost(false))}}
			>
				Cancel
			</div>
		</form>
	)
}

const FormUpdateRedux = reduxForm({
	form: "FormUpdatePost"
})(FormUpdatePost);	

const UpdatePost = () => {
	const dispatch = useDispatch();
	const toDo = useSelector(state => state.toDo.updatingPost);

	const updateLocalPost = data => {
		dispatch(canUpdatePost(false));
		dispatch(updatePost("/to_do", toDo._id, data))
	}

	return (
		<div className="updatePost">
			<FormUpdateRedux 
				onSubmit={updateLocalPost}
			/>
		</div>
	);
}

export default UpdatePost; 
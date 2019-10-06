import React, { Component } from "react";

import { connect, useSelector, useDispatch } from "react-redux";

import { reduxForm, Field } from "redux-form";

import "./updatePost.css";

import { updatePost, canUpdatePost } from "../../../../_actions/toDo.js";

const FormUpdatePost = props => {
	const dispatch = useDispatch();
	const toDo = useSelector(state => state.toDo.updatingPost);

	return(
		<form onSubmit={props.handleSubmit}>
			<Field 
				name="title"
          		component="input"
				placeholder={toDo.title}
				required
			/><br/>
			<Field 
				name="description"
          		component="input"
				type="text" 
				placeholder={toDo.title}
				required
			/><br/>
			<Field 
				name="dateTo"
          		component="input"
				type="date" 
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
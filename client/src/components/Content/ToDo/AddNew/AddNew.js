import React from "react";

import { useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { addNewToDo } from "../../../../_actions/toDo.js";

import "./addNew.css";

const FormAddNew = props => {
	return(
		<form onSubmit={props.handleSubmit}>
          	<Field 
          		name="title"
          		component="input"
          		placeholder="Title"
          		required
          	/><br/>
          	<Field 
          		name="description"
          		component="input"
          		placeholder="Description"
          		required
          	/><br/>
          	<Field 
          		name="dateTo"
          		component="input"
          		type="date" 
          	/><br/>
          	<button>Add new</button>
      </form>
	)
}

const FormAddNewRedux = reduxForm({
	form: "FormAddNew"
})(FormAddNew);	

const AddNew = () => {
	const dispatch = useDispatch();

	const addNew = data => {
		dispatch(addNewToDo("/to_do", data));
		data.title = "";
		data.description = "";
		data.dateTo = "";
	};
 
	return (
        <div className="add-new">
			<FormAddNewRedux 
				onSubmit={addNew}
			/>
        </div>
	);
}

export default AddNew; 
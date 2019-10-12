import React from "react";

import { useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { addNewToDo } from "../../../../store/_actions/toDo.js";

import { requiredField, maxLengthCreator } from "../../../_Validators/validation.js";

import { InputText, InputDate } from "../../../_Forms/Forms.js"

import "./addNew.css";

const maxLength15 = maxLengthCreator(15);

const FormAddNew = props => 
		<form onSubmit={props.handleSubmit}>
          	<Field placeholder="Title" name="title"
          		component={InputText}
          		validate={[requiredField, maxLength15]}
          	/><br/>
          	<Field placeholder="Description" name="description"
          		component={InputText}
          		validate={[requiredField, maxLength15]}
          	/><br/>
          	<Field name="dateTo"
          		component={InputDate}
          	/><br/>
          	<button>Add new</button>
      </form>

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
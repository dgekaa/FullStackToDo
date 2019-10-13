import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { toDo } from "./_reducers/toDo";
import { register } from "./_reducers/register";

const rootReducer = combineReducers({
	register,
	toDo,
	form: formReducer	
});

export default rootReducer;
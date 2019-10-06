import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { toDo } from "./toDo";

const rootReducer = combineReducers({
	toDo,
	form: formReducer
});

export default rootReducer;
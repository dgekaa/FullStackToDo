import POST_REGISTER_FORM from "../_actions/register"

const initialState = {
	login: "",
};

export const register = (state=initialState, action) => {
	console.log(action.payload, "state")
	switch(action.type){
		case POST_REGISTER_FORM:
			return {
				...state, 
                login: action.payload.login,
			}
		default:
			return state;
	}
}
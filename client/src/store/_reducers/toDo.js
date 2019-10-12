import _ from "lodash";
import { TO_DO_FETCH_DATA_SUCCESS,
	ADD_NEW_TO_DO,
	DELETE_ONE_TO_DO,
	CAN_UPDATE_POST,
	UPDATE_POST,
	ORDER_BY 
} from "../_actions/toDo.js";
	
const initialState = {
	page: 1,
	howOrderBy: "asc",
	orderName:"title"
};

export const toDo = (state=initialState, action) => {
	switch(action.type){
		case TO_DO_FETCH_DATA_SUCCESS:
			return {
				...state, 
				data: action.payload.data,
				page: action.payload.page,
				pages: action.payload.pages
			}
		case ADD_NEW_TO_DO:
			return {
				...state, 
				data: [...state.data, action.payload]
			}
		case DELETE_ONE_TO_DO:
			var newData = state.data.filter((el, i) => el._id != action.payload);
			return {
				...state, 
				data: newData
			}
		case CAN_UPDATE_POST:
			return {
				...state, 
				canUpdatePost: action.payload.bool,
				updatingPost: action.payload.post
			}
		case UPDATE_POST:
			var newData = state.data.map((el, i) => {
				if(el._id == action.payload.id){
					return el = action.payload.data
				}
				return el 
			});
			return {
				...state , 
				data: newData
			}
		case ORDER_BY:
			const orderedDatas = _.orderBy(
				action.payload.data, 
				action.payload.name, 
				action.payload.how
			);
			return {
				...state, 
				data: orderedDatas, 
				howOrderBy: action.payload.how,
				orderName: action.payload.name
			}	
		default:
			return state;
	}
}
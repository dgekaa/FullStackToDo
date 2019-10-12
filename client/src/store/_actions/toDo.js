export const TO_DO_FETCH_DATA_SUCCESS = "TO_DO_FETCH_DATA_SUCCESS";
export const ADD_NEW_TO_DO = "ADD_NEW_TO_DO";
export const DELETE_ONE_TO_DO = "DELETE_ONE_TO_DO";
export const CAN_UPDATE_POST = "CAN_UPDATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const ORDER_BY = "ORDER_BY";

export const toDoFetchDataSuccess = data => {
	return {
		type: TO_DO_FETCH_DATA_SUCCESS,
		payload : data
	}
};
export const toDoFetchData = url => {
	return (dispatch) => {
		fetch(url)
			.then( res => res.json())
			.then( data => {
				dispatch(toDoFetchDataSuccess(data))
			})
			.catch( err => new Error(err));
	}		
};

export const addNewToDoSuccess  = data => {
	return {
		type: ADD_NEW_TO_DO,
		payload : data
	}
}
export const addNewToDo = (url, data) => {
	return (dispatch) => {
		fetch(url,{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(data)
		})
			.then( res => res.json())
			.then( data => {
					    debugger
				dispatch(addNewToDoSuccess(data))
			})
			.catch( err => new Error(err));
	}		
};

export const deleteOneToDoSuccess = data => {
	return {
		type: DELETE_ONE_TO_DO,
		payload: data
	}
};
export const deleteOneToDo = (url, id) => {
	return (dispatch) => {
		fetch(`${url}/${id}`,{			
			method: "DELETE"
		})
			.then( res => res.json())
			.then( data => {
				dispatch(deleteOneToDoSuccess(data))
			})
			.catch( err => new Error(err));
	}		
};

export const canUpdatePost = (bool, post) => {
	return {
		type: CAN_UPDATE_POST,
		payload: {
			bool,
			post
		}
	}
};

export const updatePostSuccess = (id, data) => {
	return {
		type: UPDATE_POST,
		payload: {
			id,
			data
		}
	}
};

export const updatePost = (url, id, data) => {
	return (dispatch) => {
		fetch(`${url}/${id}`,{			
			method: "PUT",
			headers: {
        		'Content-Type': 'application/json'
        	},
        	body: JSON.stringify(data)
		})
			.then( res => res.json())
			.then( data => {
				dispatch(updatePostSuccess(id, data))
			})
			.catch( err => new Error(err));
	}	
};

export const orderBy = (data, name, how) => {
	return {
		type: ORDER_BY,
		payload: {
			data, 
			name, 
			how
		}
	}
};

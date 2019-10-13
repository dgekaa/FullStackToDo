export const POST_REGISTER_FORM = "POST_REGISTER_FORM";

export const postRegisterFormSuccess = data => {
	return {
		type: POST_REGISTER_FORM,
		payload : data
	}
};

export const postRegisterForm = (url, data) => {
	console.log(data);
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
				dispatch(postRegisterFormSuccess(data))
			})
			.catch( err => new Error(err));
	}		
};


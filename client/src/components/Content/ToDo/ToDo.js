import React, { useEffect, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";

import AddNew from "./AddNew/AddNew.js";
import UpdatePost from "./UpdatePost/UpdatePost.js";
import PaginationBTN from "./PaginationBTN/PaginationBTN.js";

import "./toDo.css";

import { 
	toDoFetchData, 
	deleteOneToDo, 
	canUpdatePost,
	orderBy,
} from "../../../_actions/toDo.js";

const ToDo = () => {

	const dispatch = useDispatch();

	const data 			= useSelector( state => state.toDo.data ),
		page 			= useSelector( state => state.toDo.page ),
		pages 			= useSelector( state => state.toDo.pages ),
		isUpdatePost 	= useSelector( state => state.toDo.canUpdatePost ),
		howOrderBy 	= useSelector( state => state.toDo.howOrderBy );

	console.log(useSelector( state => state) , "STORE ALL")
	
	useEffect(() => {
		!data && dispatch(toDoFetchData(`/to_do/${page}`));
	}, [page])

	const orderLocalBy = (data, name) => {
		howOrderBy === "asc"
			? dispatch(orderBy(data, name, "desc"))
			: dispatch(orderBy(data, name, "asc"))
	}

	return (
        <div className="to-do">
        	<AddNew />
           	{
        		isUpdatePost && <UpdatePost/>
        	}
        	
        	{ 
        		!data
	        		? 	"Даных пока нет"
	    			:	<Fragment>
		    				<PaginationBTN
		    					page={page}
					        	pages={pages}
					        	fetchData={toDoFetchData}
					        /> 
							<table>
								<thead>
									<tr>
										<th>Del/Upd</th>	
										<th>Id</th>		        			
										<th className="linkTh" onClick={() => {	orderLocalBy(data,	"title")}}>
											Title
										</th>		        			
										<th className="linkTh" onClick={() => {orderLocalBy(data, "description")}}>
											Description
										</th>		        			
										<th className="linkTh" onClick={() => {orderLocalBy(data, "dateTo")}}>
											Date to
										</th>		        			
									</tr>
								</thead>

								<tbody>
									{
										data.map( el => (
											<tr key={el._id}>
												<td>
													<span className="deletePost" onClick={() => {dispatch(deleteOneToDo("/to_do", el._id))}}> 
														x 
													</span>
													/
													<span className="updatePostBtn" onClick={() => {dispatch(canUpdatePost(true, el))}}> 
														+ 
													</span>
												</td>
								    			<td>{el._id}</td>		        			
								    			<td>{el.title}</td>		        			
								    			<td>{el.description}</td>		        			
								    			<td>{el.dateTo}</td>		        			
								    		</tr>
								   		))
								   	}
								</tbody>
							</table>
						</Fragment>
        	}
        </div>
   	);
}

export default ToDo; 
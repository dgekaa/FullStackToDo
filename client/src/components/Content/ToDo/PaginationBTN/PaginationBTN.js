import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { orderBy } from "../../../../store/_actions/toDo.js";

import "./PaginationBTN.css";

const PaginationBTN = ({ page, pages, fetchData }) => {

	const dispatch = useDispatch();

	const data = useSelector(state => state.toDo.data);
	const howOrderBy = useSelector(state => state.toDo.howOrderBy);
	const orderName = useSelector(state => state.toDo.orderName);

	useEffect(() => {
		dispatch(orderBy(data, orderName, howOrderBy))
	},[page])

	return (
		<div className="paginationWrapp">
			<div className="pagination">
				{
					Array.apply(null, {length: pages}).map(Number.call, Number).map( i => (
						<span 
							className="paginBTN"
							key={i} 
							style={{
								border: page == i+1 
									? "2px solid green" 
									: "1px solid #3d3d3d"
							}}
							onClick={ (e) => {
								dispatch(fetchData(`/to_do/${i+1}`))
							}}>
							{i+1}
						</span>
					))
				}
			</div>
		</div>
	)
}

export default PaginationBTN;
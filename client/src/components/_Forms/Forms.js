import React, { useState } from "react";

import Calendar from 'react-calendar';

import "./Forms.css";

export const InputText = ({ input, meta, ...props }) => {
	const err = `formControl ${meta.touched && meta.error ? " error" : ""}`;
	return(
		<div className={err}>
			<div className="inputWrap">
				<input {...input} {...props} />
			</div>

			{
				meta.touched && meta.error && 
				<span className="errText">
					{meta.error}
				</span>
			}
			
		</div>
	)
};

export const InputDate = ({ input, meta, ...props }) => {
	const [date, setDate] = useState(new Date());
	const [isCalendar, setIsCalendar] = useState(false);

	return(
		<div className="formControl">
			<div className="inputWrap">
				<input {...input} {...props} value={date.toLocaleDateString()}
					onClick={() => {
						isCalendar 
							? setIsCalendar(false)
							: setIsCalendar(true)}
					}
				/>
			</div>
			{
				isCalendar &&<Calendar 
					className="calendar"
					value={date}
					minDate={date}
					onChange={value => {setDate(value)}}
				/>
			}
		</div>
	)
};


import mongoose, { Schema } from "mongoose";

const ToDoSchema = new Schema({
	title: String,
	description: String,
	dateTo: Date
},{ 
	timestamps: true
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

export default ToDo;
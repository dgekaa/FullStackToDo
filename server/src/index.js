import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import ToDoController from "./controllers/ToDoController";

const ToDo = new ToDoController();

const app = express();
mongoose.connect(
	"mongodb://localhost:27017/ToDo", { 
        useNewUrlParser: true ,
        useUnifiedTopology: true  
    }
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
    	'Access-Control-Allow-Headers', 
    	'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
    app.options('*', (req, res) => {
        res.header(
        	'Access-Control-Allow-Methods', 
        	'GET, PATCH, PUT, POST, DELETE, OPTIONS'
        );
        res.send();
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/to_do/:page", ToDo.getAllToDO);

// app.get("/to_do/:id" , ToDo.getOneToDo);

app.post("/to_do", ToDo.postOneToDO);

app.delete("/to_do/:id", ToDo.deleteOneToDO);

app.put("/to_do/:id", ToDo.putOneToDo);


app.listen(8080 , ( ) => {
	console.log('Server is runing on port 8080')
});
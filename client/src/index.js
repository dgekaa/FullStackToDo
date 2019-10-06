import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./_reducers/rootReducer";

import "./index.css";
import App from "./App.js";
 

const store = createStore(rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>	
	</HashRouter>
, document.getElementById("root")); 
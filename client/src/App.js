import React from "react";

import './App.css';

import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Content from "./components/Content/Content.js";

const App = () => 
    <div className="wrapper">
        <Header />
        <Sidebar />
       	<Content />
    </div>

export default App;
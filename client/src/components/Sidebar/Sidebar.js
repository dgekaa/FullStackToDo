import React from "react";
import { NavLink } from "react-router-dom";

import  "./Sidebar.css";

const Sidebar = () => 
    <div className="sidebar">
        <h1>Sidebar</h1>
        <NavLink 
        	to="/main" 
        	activeClassName="activeLink">
        	На главную
        </NavLink>
        <NavLink 
        	to="/to_do" 
        	activeClassName="activeLink">
        	К списку задач
        </NavLink>
    </div>

export default Sidebar;
import React from "react";
import { Route, Redirect } from "react-router-dom";

import Profile from "./Profile/Profile.js";
import ToDo from "./ToDo/ToDo.js";
import Register from "../Register/Register";

const Content= () => 
    <div className="content">
        <Route 
            path="/main" 
            component={ Profile }
        />
        <Route 
            path="/to_do" 
            component={ ToDo }
        />
         <Route 
            path="/register" 
            component={ Register }
        />

   {/*     <Redirect 
            from="/to_do"
            to="/register"
        />*/}
    </div>


export default Content;
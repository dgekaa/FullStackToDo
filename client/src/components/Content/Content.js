import React from "react";
import { Route, Redirect } from "react-router-dom";

import Profile from "./Profile/Profile.js";
import ToDo from "./ToDo/ToDo.js";
import Login from "./Login/Login.js";

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
            path="/login" 
            component={ Login }
        />

   {/*     <Redirect 
            from="/to_do"
            to="/login"
        />*/}
    </div>


export default Content;
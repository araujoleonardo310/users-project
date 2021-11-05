import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const routers = () => {
    return (
        <Router>
            <switch>
                <Route exact path="/" components={Login} />
                <Route exact path="/home/:token" component={Home}>
            </switch>
        </Router>
    );
};

export default routers;
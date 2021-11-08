import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home/:token" component={Home} />
      </Switch>
    </Router>
  );
};
export default routes;

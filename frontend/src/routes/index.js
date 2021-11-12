import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/cadastro/:id" component={Cadastro} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};
export default routes;

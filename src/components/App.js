import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "../pages/Home";
import Crud from "../pages/Crud";
import NotFound from "../pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/crud" component={Crud} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;

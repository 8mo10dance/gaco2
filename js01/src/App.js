import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  );
}

function Routing() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
}

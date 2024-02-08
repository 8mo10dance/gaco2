import React, { useEffect } from "react";
import {
  HashRouter,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  );
}

function Routing() {
  const location = useLocation();

  useEffect(() => {
    console.log("hoge");
  }, [location]);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

function Home() {
  const history = useHistory();

  return (
    <div>
      <h1>HOME</h1>
      <button
        onClick={() => {
          history.replace("/");
        }}
      >
        click
      </button>
    </div>
  );
}

function About() {
  return <h1>ABOUT</h1>;
}

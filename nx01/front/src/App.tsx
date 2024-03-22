import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
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
          history.replace("/about");
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

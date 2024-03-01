import React, { useEffect } from "react";
import { HashRouter, Switch, Route, useHistory, useLocation, } from "react-router-dom";
export default function App() {
    return (React.createElement(HashRouter, null,
        React.createElement(Routing, null)));
}
function Routing() {
    var location = useLocation();
    useEffect(function () {
        console.log("hoge");
    }, [location]);
    return (React.createElement(Switch, null,
        React.createElement(Route, { path: "/", exact: true },
            React.createElement(Home, null)),
        React.createElement(Route, { path: "/about" },
            React.createElement(About, null))));
}
function Home() {
    var history = useHistory();
    return (React.createElement("div", null,
        React.createElement("h1", null, "HOME"),
        React.createElement("button", { onClick: function () {
                history.replace("/");
            } }, "click")));
}
function About() {
    return React.createElement("h1", null, "ABOUT");
}
//# sourceMappingURL=App.js.map
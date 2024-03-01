import React from "react";
import { createRoot } from "react-dom/client";
import "./theme.css";
import App from "./App";
document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("root");
    var root = createRoot(container);
    root.render(React.createElement(App, null));
});
//# sourceMappingURL=index.js.map
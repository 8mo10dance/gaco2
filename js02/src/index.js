import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div>hoge</div>;
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
});

import React from "react";
import { createRoot } from "react-dom/client";
import "./theme.css";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (!container) return

  const root = createRoot(container);
  root.render(<App />);
});

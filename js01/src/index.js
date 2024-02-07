import React from "react";
import { createRoot } from "react-dom/client";
import "./theme.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "dummy",
};

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
});

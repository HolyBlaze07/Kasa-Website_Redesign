import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Make sure App.jsx exists

import "./stylesheets/HomePage.scss";  // Import global styles
import "./stylesheets/Header.scss"; // Import Header styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// add router code here
import React from "react";
import ReactDOM from "react-dom";
import CreateMusic from "./pages/CreateMusic/CreateMusic";
import App from "./App";
import GlobalStyle from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <CreateMusic />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import "./styles/reset.css";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

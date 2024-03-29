import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import DimensionsProvider from "./GlobalDimensions";

ReactDOM.render(
  <React.StrictMode>
    <DimensionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DimensionsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

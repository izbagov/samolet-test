import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppContext from "./context";
import data from "./data";
import "antd/dist/antd.css";
import "./global/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={data}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

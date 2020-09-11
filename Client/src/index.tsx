import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./app/layout/App";
import store from "./app/redux/rootStore";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import history from "./app/api/routerHistory";
import "./global.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
        <ToastContainer position="bottom-right" />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

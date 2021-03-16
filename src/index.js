import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store from "./utils/store/store";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "react-toastify/dist/ReactToastify.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
// import AxiosConfig from "utils/responseHandling/AxiosConfig";
// AxiosConfig();
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <Router history={hist}>
      <Switch>
        <Route exact path="/">
          {<Redirect to="/auth/login" />}
        </Route>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

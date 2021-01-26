import React from "react";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./common/NotFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import history from "./utils/history";
import { PrivateRoute } from "./common/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <ToastContainer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute  path="/"  component={Home}  exact  />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

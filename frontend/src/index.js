import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  window.axios = axios;
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      //on successful logout redirect to
      window.location.href = "/";
    }
  } else {
    store = configureStore({});
  }
  window.store = store;
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});

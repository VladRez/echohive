
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './index.css';
// import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
    window.axios = axios;
    let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      //on successful logout redirect to
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }
  window.store = store;
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

});

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import axios from 'axios';

import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
// import * as serviceWorker from './serviceWorker';


document.addEventListener('DOMContentLoaded', () => {
    window.axios = axios;
debugger
});
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

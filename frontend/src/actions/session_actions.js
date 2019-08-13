import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};


export default function(state = initialState, action) {
    switch (action.type) {
      case RECEIVE_USER_LOGOUT:
        return {
          isAuthenticated: false,
          user: undefined
        };
      default:
        return state;
    }
  }
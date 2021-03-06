import { RECEIVE_NAV_TRACK } from "../actions/track_actions";

const NavPlayerReducer = (state = { track: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_NAV_TRACK:
      newState.track = action.track.data;
      return newState;
    default:
      return state;
  }
};

export default NavPlayerReducer;

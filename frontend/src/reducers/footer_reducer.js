import {
  RECEIVE_SINGLE_TRACK,
} from "../actions/track_actions";

const FooterReducer = (
  state = { track: {} },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SINGLE_TRACK:
      newState.track = action.track.data;
      return newState;
    default:
      return state;
  }
};

export default FooterReducer;

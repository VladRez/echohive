import {
  RECEIVE_TRACKS,
  RECEIVE_SINGLE_TRACK,
  RECEIVE_USER_TRACKS,
  RECEIVE_NAV_TRACK,
  DELETE_TRACK
} from "../actions/track_actions"; //RECEIVE_NEW_TRACK

const TracksReducer = (
  state = { all: {}, userTracks: [], track: {} },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      newState.all = action.tracks.data;
      return newState;
    case RECEIVE_USER_TRACKS:
      //newState.entities.userTracks
      newState.userTracks = action.tracks.data;
      return newState;
    case RECEIVE_SINGLE_TRACK:
      newState.track = action.track.data;
      if (action.track.data === null) return state;
      return newState;
    case DELETE_TRACK:
      newState.userTracks = state.userTracks.filter(
        track => track.id !== action.id
      );
      return newState;
    case RECEIVE_NAV_TRACK:
      newState.nav_player = action.track.data;
      return newState;
    default:
      return state;
  }
};

export default TracksReducer;

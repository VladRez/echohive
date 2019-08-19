import { RECEIVE_TRACKS, RECEIVE_SINGLE_TRACK,  } from '../actions/track_actions'; //RECEIVE_NEW_TRACK


const TracksReducer = (state = { all: {}, user: [], new: undefined, track: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState.all = action.tracks.data;
            return newState;
        case RECEIVE_SINGLE_TRACK:
            newState.track = action.track.data;
            if (action.track.data === null) return state;
            return newState;
        default:
            return state;
    }
};

export default TracksReducer;
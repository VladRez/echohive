import { RECEIVE_TRACKS, RECEIVE_NEW_TRACK } from '../actions/track_actions';

const TracksReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState.all = action.tracks.data;
            return newState;
        // case RECEIVE_SINGLE_TRACK:
        //     newState.user = action.track.data;
        //     return newState;
        case RECEIVE_NEW_TRACK:
            newState.new = action.track.data
            return newState;
        default:
            return state;
    }
};

export default TracksReducer;
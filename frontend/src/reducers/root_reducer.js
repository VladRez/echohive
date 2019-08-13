import { combineReducers } from 'redux';
import entities from './entities_reducer'; //this is doing nothing
import tracks from './tracks_reducer';
// import session from './session_reducer';
// import errors from './errors_reducer';

const RootReducer = combineReducers({
    // session,
    // errors
    entities,
    tracks
});

export default RootReducer;
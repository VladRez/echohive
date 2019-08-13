import { combineReducers } from 'redux';
import tracks from './tracks_reducer';
// import session from './session_reducer';
// import errors from './errors_reducer';

const EntitiesReducer = combineReducers({
    tracks
});

export default EntitiesReducer;
import { combineReducers } from 'redux';
import entities from './entities_reducer'; //this is doing nothing
import tracks from './tracks_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import footer from "./footer_reducer";

import comments from './comments_reducer';

const RootReducer = combineReducers({
    comments,
    session,
    errors,
    entities,
    tracks,
  ui,
    footer
});

export default RootReducer;

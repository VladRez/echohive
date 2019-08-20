import {
  RECEIVE_TRACK_COMMENTS,
  RECEIVE_NEW_COMMENT,
  RECEIVE_SINGLE_TRACK
} from "../actions/track_actions";
// import merge from 'lodash/merge';

const CommentsReducer = (
  state = { comments: [] }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TRACK_COMMENTS:
      newState.comments = action.comments;
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState.comments.push(action.comment.data);
      return newState;
    case RECEIVE_SINGLE_TRACK:
        return {comments: []};
    default:
      return state;
  }
};

export default CommentsReducer;

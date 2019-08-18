import {
  RECEIVE_TRACK_COMMENTS,
  RECEIVE_NEW_COMMENT
} from "../actions/track_actions";

const CommentsReducer = (
  state = { comments: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TRACK_COMMENTS:
      newState.comments = action.comments.data;
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState.comments = action.comment.data.body;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;

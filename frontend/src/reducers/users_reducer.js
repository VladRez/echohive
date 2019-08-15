import { RECEIVE_USER } from "../actions/user_actions";

const nullState = Object.freeze({});

const UsersReducer = (state = nullState, actions) => {
  Object.freeze(nullState);

  switch (actions.type) {
    case RECEIVE_USER:
    let newState = Object.assign({},actions.user)
    let id = actions.user._id
    delete newState['password']
    delete newState['date']
      return {[id]: newState};
    default:
      return state;
  }
};

export default UsersReducer;

import React from "react";
import UserProfile from "./user_profile";

import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: Object.values(state.entities.users)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

import React from "react";
import UserProfile from "./user_profile.jsx";

import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchUserTracks } from "../../actions/track_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
      user: Object.values(state.entities.users)[0],
      tracks: state.entities.tracks.user,
    //   tracks: Object.values(state.tracks.all),
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchUser: id => dispatch(fetchUser(id)),
      fetchUserTracks: id => dispatch(fetchUserTracks(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
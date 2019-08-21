import React from "react";
import UserProfile from "./user_profile.jsx";

import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchUserTracks, fetchSingleTrack, fetchNavTrack } from "../../actions/track_actions";

const mapStateToProps = (state, ownProps) => {
  return {
      user: Object.values(state.entities.users)[0],
      tracks: state.tracks.userTracks
    //   tracks: Object.values(state.tracks.all),
  };
};

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUserTracks: id => dispatch(fetchUserTracks(id)),
    fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
    fetchNavTrack: id => dispatch(fetchNavTrack(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
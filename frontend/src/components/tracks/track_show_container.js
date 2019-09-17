import { connect } from "react-redux";
import {
  fetchSingleTrack,
  fetchComments,
  createComment,
  fetchNavTrack
} from "../../actions/track_actions";
// import {fetchUser} from "../../actions/user_actions";
import TrackShow from "./track_show";

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.tracks.all),
    track: state.tracks.track,
    comments: state.comments.comments,
    currentUser: state.session.user.id,
    username: state.session.user.username
     };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
    fetchComments: id => dispatch(fetchComments(id)),
    postComment: comment => dispatch(createComment(comment)),
    fetchNavTrack: id => dispatch(fetchNavTrack(id))
    // fetchSingleTrack: id => dispatch(fetchSingleTrack(id))
    // fetchUser: id => dispatch(fetchUser(id)) //to display username next to comments
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);

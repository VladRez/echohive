import { connect } from "react-redux";
import {
  fetchSingleTrack,
  fetchComments,
  createComment
} from "../../actions/track_actions";
import TrackShow from "./track_show";

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.tracks.all),
    track: state.tracks.track,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleTrack: id => dispatch(fetchSingleTrack(id)),
    fetchComments: id => dispatch(fetchComments(id)),
    postComment: comment => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);

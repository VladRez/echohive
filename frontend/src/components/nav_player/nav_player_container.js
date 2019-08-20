import { connect } from "react-redux";
import NavPlayer from "./nav_player";
import { fetchSingleTrack } from "../../actions/track_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.isAuthenticated,
    nav_player: state.nav_player
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchSingleTrack: id => dispatch(fetchSingleTrack(id))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlayer);

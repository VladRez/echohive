import { connect } from "react-redux";
import { fetchSingleTrack } from "../../actions/track_actions";

import Footer from "./footer";
const mapStateToProps = state => {
    return {
      currentUser: state.session.user,
      footer: state.footer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

import { connect } from "react-redux";
import NavPlayer from "./nav_player";
const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlayer);

import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_acitons';

import Session from './session';

const mapStateToProps = (state, ownProps) => {
  
  return {
    isAuthenticated: state.session.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    demoLogin: ()=>dispatch(login({
      username: "cmarginson9",
      password: "3oYujowSBMht",
      errors: {}
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
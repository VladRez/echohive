import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_acitons';
import SignupForm from './signup_form';


const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
          Login
        </button>
      ),
      closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
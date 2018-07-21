import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

const LoginLink = ({ login, children }) => {
  return(
    <a onClick={login}>
      { children }
    </a>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login())
});

export default connect(null, mapDispatchToProps)(LoginLink);
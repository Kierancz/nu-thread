import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

const LogoutLink = ({ logout, children }) => {
  return(
    <a onClick={logout}>
      { children }
    </a>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(LogoutLink);
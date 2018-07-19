import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import Button from '@material-ui/core/Button';

const Login = ({ login }) => {
  return(
    <DocumentTitle title="Login">
      <div>
        <Button onClick={login}>Login</Button>
      </div>
    </DocumentTitle>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login())
});

export default connect(null, mapDispatchToProps)(Login);
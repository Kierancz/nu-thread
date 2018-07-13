import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { startLogin } from '../../redux/actions/auth';
import Button from '@material-ui/core/Button';

const Login = ({ startLogin }) => {
  return(
    <DocumentTitle title="Login">
      <div>
        <Button onClick={startLogin}>Login</Button>
      </div>
    </DocumentTitle>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(Login);
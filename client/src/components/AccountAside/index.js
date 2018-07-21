import React from 'react';
import { LoginButton, LogoutButton } from './links';

const AccountAside = props => {
  const button = props.loggedIn?
    LogoutButton : 
    LoginButton;

  return(
    <div>
      { button }
    </div>
  );
}

export default AccountAside;
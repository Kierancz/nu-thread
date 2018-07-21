import React from 'react';
import { 
  LoginButton, 
  LogoutButton, 
  AccountButton 
} from './links';

const AccountAside = props => {
  const button = props.loggedIn?
    LogoutButton : 
    LoginButton;

  const accountBtn = props.loggedIn?
    AccountButton :
    null;

  return(
    <div>
      { accountBtn }
      { button }
    </div>
  );
}

export default AccountAside;
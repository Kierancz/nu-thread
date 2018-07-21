import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Login, Logout, Account } from 'mdi-material-ui';
import styled from 'styled-components';
import LoginLink from '../../containers/LoginLink';
import LogoutLink from '../../containers/LogoutLink';

const StyledListItem = styled(ListItem)` && {
  color: black;
  padding-left: 22%;
}`;
const StyledListItemIcon = styled(ListItemIcon)` && {
  color: black;
}`;

export const LoginButton = (
  <LoginLink>
    <StyledListItem button>
      <StyledListItemIcon>
        <Login />
      </StyledListItemIcon>
      <ListItemText primary="Login" />
    </StyledListItem>
  </LoginLink>
);

export const LogoutButton = (
  <LogoutLink>
    <StyledListItem button>
      <StyledListItemIcon>
        <Logout />
      </StyledListItemIcon>
      <ListItemText primary="Logout" />
    </StyledListItem>
  </LogoutLink>
);

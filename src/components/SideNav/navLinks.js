import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { HomeOutline, InformationOutline, TshirtCrew } from 'mdi-material-ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const active = btoa(Math.random());
const StyledLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;

  &.${active} > div {
    background-color: rgba(0,0,0,0.2);
  }
`;
const StyledListItem = styled(ListItem)` && {
  color: black;
}`;
const StyledListItemIcon = styled(ListItemIcon)` && {
  color: black;
}`;

export const NavLinks = (
  <div>
    <StyledLink exact to="/" activeClassName={active}>
      <StyledListItem button>
        <StyledListItemIcon>
          <HomeOutline />
        </StyledListItemIcon>
        <ListItemText primary="Home" />
      </StyledListItem>
    </StyledLink>
    <StyledLink exact to="/about" activeClassName={active}>
      <StyledListItem button>
        <StyledListItemIcon>
          <InformationOutline />
        </StyledListItemIcon>
        <ListItemText primary="About" />
      </StyledListItem>
    </StyledLink>
    <StyledLink exact to="/items" activeClassName={active}>
      <StyledListItem button>
        <StyledListItemIcon>
          <TshirtCrew />
        </StyledListItemIcon>
        <ListItemText primary="Items" />
      </StyledListItem>
    </StyledLink>
  </div>
);

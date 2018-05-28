import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, InformationOutline, TshirtCrew } from 'mdi-material-ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const NavLinks = (
  <div>
    <StyledLink to="/">
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/about">
      <ListItem button>
        <ListItemIcon>
          <InformationOutline />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/items">
      <ListItem button>
        <ListItemIcon>
          <TshirtCrew />
        </ListItemIcon>
        <ListItemText primary="Items" />
      </ListItem>
    </StyledLink>
  </div>
);

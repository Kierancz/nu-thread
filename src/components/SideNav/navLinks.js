import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { HomeOutline, InformationOutline, TshirtCrew } from 'mdi-material-ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
`;
const StyledLogoText = styled.span`
  color: black;
  font-size: 24px;
  font-weight: 700;
`;
const LogoWrapper = styled.div`
  height: 4em;
  display: inline-flex;
`;
export const NavLogo = (
  <LogoWrapper>
    <StyledLink to="/">
      <StyledLogoText>
        nu-thread
      </StyledLogoText>
    </StyledLink>
  </LogoWrapper>
);

export const NavLinks = (
  <div>
    <StyledLink to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeOutline />
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

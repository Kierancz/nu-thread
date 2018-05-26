import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledRoot = styled.div`
  width: 100%;
`;
const StyledAppBar = styled(AppBar)` && {
  background: #000;
}`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  text-transform: lowercase;
  margin-left: 1em;
`;
const Center = styled.div`
  display: block;
  margin: 0 auto;
`;
const StyledLogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const Navbar = (props) => {
  return (
    <StyledRoot>
      <StyledAppBar position="static">
        <Toolbar>
          <Center>
            <StyledLink to="/">
              <StyledLogoText>
                nu-thread
              </StyledLogoText>
            </StyledLink>
            <StyledLink to="/about">
              About
            </StyledLink>
            <StyledLink to="/items">
              Items
            </StyledLink>
          </Center>
        </Toolbar>
      </StyledAppBar>
    </StyledRoot>
  );
};

export default Navbar;
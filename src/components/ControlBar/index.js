import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledRoot = styled.div`
  width: 100%;
  height: 4em;
`;
const StyledContainer = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const StyledAppBar = styled(AppBar)` && {
  background: white;
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

const ControlBar = (props) => {
  return (
    <StyledRoot>
    <StyledContainer>
      <StyledAppBar position="static">
        <Toolbar>
          { props.children }
        </Toolbar>
      </StyledAppBar>
    </StyledContainer>
    </StyledRoot>
  );
};

export default ControlBar;
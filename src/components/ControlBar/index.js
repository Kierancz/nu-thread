import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledRoot = styled.div`
  width: 100%;
  height: 2em;
`;
const StyledAppBar = styled(AppBar)` && {
  background: white;
  @media (min-width: 960px) {
    width: calc(100% - 240px);
  }
}`;

const ControlBar = (props) => {
  return (
    <StyledRoot>
      <StyledAppBar position="fixed">
        <Toolbar>
          { props.children }
        </Toolbar>
      </StyledAppBar>
    </StyledRoot>
  );
};

export default ControlBar;
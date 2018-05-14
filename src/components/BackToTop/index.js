import React from "react";
import ScrollToTop from "react-scroll-up";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

import { ArrowUp } from 'mdi-material-ui';

const StyledArrowUp = styled(ArrowUp)`
  && {
    width: 2em;
    height: 2em;
    opacity: 0.6;
  }

  &:hover {
    opacity: 1;
  }
`;


const BackToTop = () => {
  return (
    <ScrollToTop showUnder={300}>
      <Tooltip id="tooltip-icon" title="Back To Top">
        <IconButton aria-label="Back To Top">
          <StyledArrowUp />
        </IconButton>
      </Tooltip>
    </ScrollToTop>
  )
}

export default BackToTop;

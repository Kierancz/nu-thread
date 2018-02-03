import React from 'react';
import styled from 'styled-components';
import { MenuItem } from 'material-ui/Menu';

const Span = styled.span`
  background-color: blue;
`;

const FLink = ({
  active,
  children,
  onClick,
  handleClose
}) => {
  // when our filter link is active make it unclickable
  /*
  if(active) {
    return <Span>{children}</Span>
  }
  */

  return (
    <MenuItem
      onClick={e => {
        e.preventDefault();
        onClick();
        handleClose();
      }}
    >
      {children}
    </MenuItem>
  );
};

export default FLink;

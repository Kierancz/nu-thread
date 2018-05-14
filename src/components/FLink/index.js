import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';

const ActiveItem = styled(MenuItem)`
  background-color: grey;
  color: white;
`

const FLink = ({
  active,
  children,
  onClick,
  handleClose
}) => {
  // when our filter link is active make it unclickable

  if(active) {
    //console.log('active filter item');
    return (
      <ActiveItem
        onClick={e => {
          e.preventDefault();
        }}
      >
        {children}
      </ActiveItem>
    );
  }
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

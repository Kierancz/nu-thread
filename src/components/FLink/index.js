import React from 'react';
import { MenuItem } from '@material-ui/core';

const FLink = ({
  active,
  children,
  onClick,
  handleClose
}) => {
  return (
    <MenuItem
      style={{
        backgroundColor: active? 'rgba(0,0,0,.2)' : ''
      }}
      onClick={(e) => {
        e.preventDefault();
        if(!active) onClick();
        handleClose();
      }}
    >
      {children}
    </MenuItem>
  );
};

export default FLink;

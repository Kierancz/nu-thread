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
        backgroundColor: active? '#3f51b5' : '',
        color: active? 'white' : 'black'
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

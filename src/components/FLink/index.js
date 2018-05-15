import React from 'react';
import { MenuItem } from '@material-ui/core';

const FLink = ({
  active,
  children,
  onClick,
  handleClose
}) => {
  const addSort = active?
    null
    : (e) => {
      e.preventDefault();
      onClick();
      handleClose();
    };

  return (
    <MenuItem
      style={{
        backgroundColor: active? 'rgba(0,0,0,.2)' : ''
      }}
      onClick={addSort}
    >
      {children}
    </MenuItem>
  );
};

export default FLink;

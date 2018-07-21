import React from 'react';
import styled from 'styled-components';

const StyledIcon = (Icon) => (props, children) => {
  const NewIcon = styled(Icon)`
    margin-left: ${props => props.pos==='right'? '0.5rem' : '0' };
    margin-right: ${props => props.pos==='left'? '0.5rem' : '0' };
  `;

  return (
    <NewIcon {...props}>
      {children}
    </NewIcon>
  );
};

export default StyledIcon;

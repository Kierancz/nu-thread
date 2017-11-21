import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin: 0.5em;
  text-decoration: none;
  font-weight: bold;
`;

const FLink = ({
  active,
  children,
  onClick
}) => {
  // when our filter link is active make it unclickable
  if(active) {
    return <span>{children}</span>
  }

  return (
    <StyledLink href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </StyledLink>
  );
};

export default FLink;
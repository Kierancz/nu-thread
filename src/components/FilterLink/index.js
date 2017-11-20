import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin: 0.5em;
  text-decoration: none;
  font-weight: bold;
`;

const FilterLink = ({
  filter, 
  currentFilter,
  children,
  onClick
}) => {
  // when our filter link is active make it unclickable
  if(filter === currentFilter) {
    return <span>{children}</span>
  }

  return (
    <StyledLink href='#'
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </StyledLink>
  );
};

export default FilterLink;
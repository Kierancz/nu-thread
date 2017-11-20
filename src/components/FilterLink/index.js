import React from 'react';
import store from '../../modules/configureStore';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin: 0.5em;
  text-decoration: none;
  font-weight: bold;
`;

const FilterLink = ({
  filter, 
  currentFilter,
  children 
}) => {
  // when our filter link is active make it unclickable
  if(filter === currentFilter) {
    return <span>{children}</span>
  }
  
  return (
    <StyledLink href='#'
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_FILTER',
          filter
        });
      }}
    >
      {children}
    </StyledLink>
  );
};

export default FilterLink;
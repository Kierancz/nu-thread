import React from 'react';
import styled from 'styled-components';
import FilterLink from '../FilterLink';

const Wrapper = styled.section`
  padding: 1em;
  display: block;
`;

const FilterBar = ({ 
  filter,
  onFilterClick
}) => (
  <Wrapper>
    Show:
    <FilterLink 
      filter='SHOW_ALL'
      currentFilter={filter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    <FilterLink 
      filter='PRICE_ASC'
      currentFilter={filter}
      onClick={onFilterClick}
    >
      Price &uarr;
    </FilterLink>
    <FilterLink 
      filter='PRICE_DESC'
      currentFilter={filter}
      onClick={onFilterClick}
    >
      Price &darr;
    </FilterLink>
  </Wrapper>
);

export default FilterBar;
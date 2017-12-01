import React from 'react';
import styled from 'styled-components';
import FilterLink from '../FilterLink';

const Wrapper = styled.section`
  padding: 1em;
  display: inline;
`;

const FilterBar = () => (
  <Wrapper>
    Show:
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    <FilterLink filter='PRICE_ASC'>
      Price &uarr;
    </FilterLink>
    <FilterLink filter='PRICE_DESC'>
      Price &darr;
    </FilterLink>
  </Wrapper>
);

export default FilterBar;
import React from 'react';
import styled from 'styled-components';
import FilteredItems from '../FilteredItems';

const StyledWrapper = styled.div`
  margin: 1.5em 1em;
  @media only screen and (min-width: 1200px) {
    display: inline-block;
    width: 80%;
  }
`;

const Items = () => (
  <StyledWrapper>
    <FilteredItems />
  </StyledWrapper>
);

export default Items;

import React from 'react';
import styled from 'styled-components';
import FilteredItems from '../FilteredItems';

const StyledWrapper = styled.div`
  margin: 1.5em 1em;
`;

const Items = () => (
  <StyledWrapper>
    <FilteredItems />
  </StyledWrapper>
);

export default Items;

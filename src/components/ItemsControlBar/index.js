import React from 'react';
import styled from 'styled-components';

import FilterBar from '../FilterBar';
import Profile from '../../containers/Profile';
import SearchItems from '../../containers/SearchItems';
import SearchConfig from '../../containers/SearchConfig';

const ControlBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.5em;
  @media only screen and (max-width: 550px) {
    justify-content: start;
  }
`;
const PullRight = styled.div`
  margin-right: 0.5em;
`;
const PullLeft = styled.div`
  margin-left: 0.5em;
`;
const Center = styled.div`
  display: flex;
  margin-left: 0.5em;
  @media only screen and (max-width: 550px) {
    order: 1;
    margin-top: 0.5em;
    margin-right: 0.5em;
  }
`;

const ItemsControlBar = () => {
  return (
    <ControlBar>
      <PullLeft>
        <Profile />
      </PullLeft>

      <Center>
        <SearchItems />
        <SearchConfig />
      </Center>

      <PullRight>
        <FilterBar />
      </PullRight>
    </ControlBar>
  );
};

export default ItemsControlBar;

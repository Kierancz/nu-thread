import React from 'react';
import styled from 'styled-components';

import FilterBar from '../FilterBar';
import Profile from '../../containers/Profile';
import SearchItems from '../../containers/SearchItems';
import SearchConfig from '../../containers/SearchConfig';
import ControlBar from '../ControlBar';

const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 3;
`;

export default class ItemsControlBar extends React.Component {
  state = {
    isMobile: false
  };
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  };
  componentWillMount() {
    this.updateDimensions();
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  };
  updateDimensions() {
    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    this.setState({ isMobile: width < 600 });
  };

  render() {
    const { isMobile } = this.state;
    return (
      <ControlBar>
        <Controls>
          <Profile isMobile={isMobile} />

          <div>
            <SearchConfig />
            <SearchItems />
          </div>

          <FilterBar isMobile={isMobile}/>
        </Controls>
      </ControlBar>
    );
  }
};
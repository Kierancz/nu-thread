import React from 'react';
import ItemsControlBar from '../ItemsControlBar';
import ItemCard from '../ItemCard';
import Spinner from '../Spinner';
import withInfiniteScroll from '../InfiniteScroll';
import BackToTop from '../BackToTop';
import MotionGrid from '../MotionGrid';
import styled from 'styled-components';

const StyledRoot = styled.div`
`;
const ItemWrapper = styled.div`
  margin: 1em;
`;

class ItemGrid extends React.Component {
  componentDidMount() {
    const { items, requestItems } = this.props;
    if(!items) requestItems();
  }

  render() {
    const { items, isLoading } = this.props;
    const renderItems = items?
      items.map((item, i) =>
        <ItemCard
          {...item}
          key={i}
          i={i}
          item={item}
        />) : null;

    const motionGrid = renderItems? (
      <MotionGrid
        responsive={{lg: 4, md: 4, sm: 6, xs: 12}}
        percentChange="2"
      >
        { renderItems }
      </MotionGrid>) : null;

    return(
      <StyledRoot>
        <ItemsControlBar />
        <ItemWrapper>
          { motionGrid }
          {
            isLoading?
              <Spinner message="Loading Items..."/> : ''
          }
          <BackToTop />
        </ItemWrapper>
      </StyledRoot>
    );
  }
}

export default withInfiniteScroll(ItemGrid);

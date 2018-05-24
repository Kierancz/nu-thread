import React from 'react';
import ItemsControlBar from '../ItemsControlBar';
import ItemCard from '../ItemCard';
import Spinner from '../Spinner';
import withInfiniteScroll from '../InfiniteScroll';
import BackToTop from '../BackToTop';
import MotionGrid from '../MotionGrid';

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
        responsive={{lg: 3, md: 4, sm: 6, xs: 12}}
        percentChange="2"
      >
        { renderItems }
      </MotionGrid>) : null;

    return(
      <div>
        <ItemsControlBar />
        { motionGrid }
        {
          isLoading?
            <Spinner message="Loading Items..."/> : ''
        }
        <BackToTop />
      </div>
    );
  }
}

export default withInfiniteScroll(ItemGrid);

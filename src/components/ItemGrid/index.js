import React from 'react';
import { Page, Row, Column } from 'hedron';

import ItemsControlBar from '../ItemsControlBar';
import ItemCard from '../ItemCard';
import Spinner from '../Spinner';
import withInfiniteScroll from '../InfiniteScroll';
import BackToTop from '../BackToTop';

class ItemGrid extends React.Component {
  componentDidMount() {
    const { items, requestItems } = this.props;
    if(!items) requestItems();
  }

  render() {
    const { items, isLoading } = this.props;

    return(
      <Page fluid={true}>
        <Row>
          <Column xs={12} md={10} mdShift={1}>
            <ItemsControlBar />
            <Row>
              {
                items?
                  items.map((item, i) =>
                    <ItemCard
                      {...item}
                      key={i}
                      i={i}
                      item={item}
                    />
                  ) : ''
              }
              {
                isLoading?
                  <Spinner message="Loading Items..."/> : ''
              }
            </Row>
            <BackToTop />
          </Column>
        </Row>
      </Page>
    );
  }
}

export default withInfiniteScroll(ItemGrid);

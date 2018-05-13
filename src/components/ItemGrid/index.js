import React from 'react';
import { Page, Row, Column } from 'hedron';
import styled from 'styled-components';

import ItemCard from '../ItemCard';
import FilterBar from '../FilterBar';
import Profile from '../../containers/Profile';
import ConfigForm from '../ConfigForm';
import Spinner from '../Spinner';
import withInfiniteScroll from '../InfiniteScroll';
import BackToTop from '../BackToTop';
import SearchItems from '../../containers/SearchItems';

const ControlBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;
const PullRight = styled.div`
  margin-right: 0.5em;
`;
const PullLeft = styled.div`
  margin-left: 0.5em;
`;
const Center = styled.div`
  display: flex;
  @media only screen and (max-width: 400px) {
    order: 1;
    margin-top: 0.5em;
    margin-left: 0.5em;
  }
`;

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
            <ControlBar>
              <PullLeft>
                <Profile />
              </PullLeft>
        
              <Center>
                <SearchItems />
                <ConfigForm />
              </Center>

              <PullRight>
                <FilterBar />
              </PullRight>
            </ControlBar>
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

import React from 'react';
import { Page, Row, Column } from 'hedron';
import styled from 'styled-components';

import ItemCard from '../ItemCard';
import FilterBar from '../FilterBar';
import Profile from '../../containers/Profile';
import Spinner from '../Spinner';

const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PullRight = styled.span`
  display: inline-block;
  margin-right: 0.5em;
`;

const PullLeft = styled.span`
  display: inline-block;
  margin-bottom: 0.5em;
  margin-left: 0.5em;
`;

export default class ItemGrid extends React.Component {
  componentDidMount() {
    if(!this.props.items) this.props.requestItems();
  }
  render() {
    const { items } = this.props;
    const renderItems = items? items : [];

    return(
      <Page fluid={true}>
        <Row>
          <Column xs={12} md={10} mdShift={1}>
            <ControlBar>
              <PullLeft>
                <Profile />
              </PullLeft>
              <PullRight>
                <FilterBar />
              </PullRight>
            </ControlBar>
            <Row>
              {renderItems.length? renderItems.map((item, i) =>
                <ItemCard
                  {...item}
                  key={i}
                  i={i}
                  item={item}
                />
              ) : <Spinner message="Loading Items..."/>}
            </Row>
          </Column>
        </Row>
      </Page>
    );
  }
}

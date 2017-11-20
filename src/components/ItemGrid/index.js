import React, { Component } from 'react';
import ItemCard from '../ItemCard';
import FilterLink from '../FilterLink';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

const Wrapper = styled.section`
  padding: 1em;
  display: block;
`;

const getFilteredItems = (items, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return items;
    case 'PRICE_ASC':
      return items.sort((a, b) => {
        return(
          parseFloat(
            a
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
          -
          parseFloat(
            b
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
        );
      });
    case 'PRICE_DESC':
      return items.sort((a, b) => {
        return(
          parseFloat(
            b
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
          -
          parseFloat(
            a
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
        );
      });
    default:
      return items;
  }
}

class ItemGrid extends Component {
  render() {
    const {
      items, 
      filter
    } = this.props;
    const filteredItems = getFilteredItems(
      items,
      filter
    );


    /*
    const testFilter = getFilteredItems(
      this.props.items,
      'PRICE_DESC'
    );
    */
    return (
      <Page>
        <Row>
          <Column xs={12} md={10} mdShift={1}>
            <Wrapper>
              Show:
              <FilterLink 
                filter='SHOW_ALL'
                currentFilter={filter}
              >
                All
              </FilterLink>
              <FilterLink 
                filter='PRICE_ASC'
                currentFilter={filter}
              >
                Price &uarr;
              </FilterLink>
              <FilterLink 
                filter='PRICE_DESC'
                currentFilter={filter}
              >
                Price &darr;
              </FilterLink>
            </Wrapper>

            <Row>
              {filteredItems.map(
              (item, i) => 
                <ItemCard 
                  {...this.props} 
                  key={i} 
                  i={i} 
                  item={item}
                />
            )}
            </Row>
          </Column>
        </Row>
      </Page>
    );
  }
}

export default ItemGrid;
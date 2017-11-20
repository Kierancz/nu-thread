import React from 'react';
import { Page, Row, Column } from 'hedron';
import store from '../../modules/configureStore';

import FilterBar from '../../components/FilterBar';
import ItemGrid from '../../components/ItemGrid';


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

const Items = ({
  items, filter
}) => {
  /*
  const filteredItems = getFilteredItems(
    items,
    filter
  );
  */

  return (
    <Page>
      <Row>
        <Column xs={12} md={10} mdShift={1}>
          <FilterBar
            filter={filter}
            onFilterClick={filter => store.dispatch({
              type: 'SET_FILTER',
              filter
            })}
          />

          <ItemGrid 
            items={
              getFilteredItems(
                items,
                filter
              )
            }
          />
        </Column>
      </Row>
    </Page>
  );
}

export default Items;
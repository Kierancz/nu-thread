import React from 'react';
import { Page, Row, Column } from 'hedron';

import ItemCard from '../ItemCard';

const ItemGrid = ({ items }) => {
  return(
    <Page>
      <Row>
        <Column xs={12} md={10} mdShift={1}>
          <Row>
            {items.map((item, i) => 
              <ItemCard 
                {...item} 
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
};

export default ItemGrid;
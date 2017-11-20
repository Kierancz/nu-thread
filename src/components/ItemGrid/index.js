import React from 'react';
import ItemCard from '../ItemCard';
import { Row } from 'hedron';

const ItemGrid = ({
  items
}) => {
  return(
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
  );
};

export default ItemGrid;
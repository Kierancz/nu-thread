import React from 'react';
import FilteredItems from '../FilteredItems';
import ItemsControlBar from '../../components/ItemsControlBar';

const Items = () => (
  <div>
    <ItemsControlBar />
    <FilteredItems container="#sidenav-content" content="#item-grid" />
  </div>
);

export default Items;

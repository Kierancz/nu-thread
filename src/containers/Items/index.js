import React from 'react';
import FilteredItems from '../FilteredItems';
import SideNav from '../../components/SideNav';
import ItemsControlBar from '../../components/ItemsControlBar';

const Items = () => (
  <SideNav bar={<ItemsControlBar/>}>
    <FilteredItems container="#sidenav-content" content="#item-grid" />
  </SideNav>
);

export default Items;
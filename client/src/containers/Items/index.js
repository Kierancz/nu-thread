import React from 'react';
import FilteredItems from '../FilteredItems';
import SideNav from '../../components/SideNav';
import ItemsControlBar from '../../components/ItemsControlBar';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title='Items'>
    <SideNav bar={<ItemsControlBar/>}>
      <FilteredItems container="#sidenav-content" content="#item-grid" />
    </SideNav>
  </DocumentTitle>
);
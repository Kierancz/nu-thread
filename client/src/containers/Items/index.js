import React from 'react';
import FilteredItems from '../FilteredItems';
import Nav from '../Nav';
import ItemsControlBar from '../../components/ItemsControlBar';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title='Items'>
    <Nav bar={<ItemsControlBar/>}>
      <FilteredItems container="#sidenav-content" content="#item-grid" />
    </Nav>
  </DocumentTitle>
);
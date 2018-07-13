import {
  requestItems,
  receiveItems,
  requestItemPage, 
  receiveItemPage 
} from './items';

test('should setup requestItems action object', () => {
  const action = requestItems('shirt');
  expect(action).toEqual({
    type: 'REQUEST_ITEMS',
    query: 'shirt'
  });
});
test('should setup receiveItems action object', () => {
  const action = receiveItems({name: 'item name'}, 4);
  expect(action).toEqual({
    type: 'RECEIVE_ITEMS',
    items: { name: 'item name' },
    lastPage: 4
  });
});
test('should setup requestItemPage action object', () => {
  const action = requestItemPage(3);
  expect(action).toEqual({
    type: 'REQUEST_ITEM_PAGE',
    nextPage: 3
  });
});
test('should setup receiveItemPage action object', () => {
  const action = receiveItemPage(2, { name: 'item name' });
  expect(action).toEqual({
    type: 'RECEIVE_ITEM_PAGE',
    nextPage: 2,
    items: { name: 'item name' }
  });
});
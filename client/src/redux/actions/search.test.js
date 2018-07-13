import {
  addSortType,
  addQuery,
  addConfig 
} from './search';

test('should setup addSortType action object', () => {
  const action = addSortType('BEST_MATCH');
  expect(action).toEqual({
    type: 'ADD_SORT_TYPE',
    sortType: 'BEST_MATCH'
  });
});
test('should setup addQuery action object', () => {
  const action = addQuery('jacket');
  expect(action).toEqual({
    type: 'ADD_QUERY',
    query: 'jacket'
  });
});
test('should setup addConfig action object', () => {
  const action = addConfig({ brands: ['Patagonia', 'Orvis'] });
  expect(action).toEqual({
    type: 'ADD_CONFIG',
    config: { brands: ['Patagonia', 'Orvis'] }
  });
});
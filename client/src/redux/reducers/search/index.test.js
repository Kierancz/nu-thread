import { getQuery, getConfig, getSortType } from './index';
import search from './index';

const state = {
  search: {
    query: 'jacket',
    config: ['Patagonia', 'Orvis'],
    sortType: 'BEST_MATCH'
  }
};

// Test Selectors
test('selector getQuery should return search query', () => {
  const result = getQuery(state);
  expect(result).toEqual('jacket');
});
test('selector getConfig should return search config', () => {
  const result = getConfig(state);
  expect(result).toEqual(['Patagonia', 'Orvis']);
});
test('selector getSortType should return search sortType', () => {
  const result = getSortType(state);
  expect(result).toEqual('BEST_MATCH');
});

// Test Reducers
const initState = {
  query: null,
  config: ['Patagonia', 'Orvis'],
  sortType: 'BEST_MATCH'
}
test('should set addQuery state', () => {
  const result = search(initState, { 
    type: 'ADD_QUERY', 
    query: 'dress shirt' 
  });
  expect(result).toEqual({
    query: 'dress shirt',
    config: ['Patagonia', 'Orvis'],
    sortType: 'BEST_MATCH'
  });
});

test('should set addConfig state', () => {
  const result = search(initState, { 
    type: 'ADD_CONFIG', 
    config: ['Pendleton', 'Filson']
  });
  expect(result).toEqual({
    query: null,
    config: ['Pendleton', 'Filson'],
    sortType: 'BEST_MATCH'
  });
});

test('should set addSortType state', () => {
  const result = search(initState, { 
    type: 'ADD_SORT_TYPE', 
    sortType: 'END_SOON'
  });
  expect(result).toEqual({
    query: null,
    config: ['Patagonia', 'Orvis'],
    sortType: 'END_SOON'
  });
});
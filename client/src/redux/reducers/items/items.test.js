import { getLastPage } from './items';
import items from './items';

// Selector Tests
test('selector getLastPage should return last page number', () => {
  const state = {
    items: {
      lastPage: 9
    }
  };
  const result = getLastPage(state);
  expect(result).toEqual(state.items.lastPage);
});


// Reducer Tests
test('should set requestItems state', () => {
  const state = items({}, { type: 'REQUEST_ITEMS', lastPage: 9 });
  expect(state).toEqual({
    items: null,
    nextPage: 2,
    isLoading: true,
    allLoaded: false
  });
});

test('should set receiveItems state', () => {
  const currentState = {
    items: null,
    nextPage: 2,
    isLoading: true,
    allLoaded: false
  };
  const state = items(currentState, { 
    type: 'RECEIVE_ITEMS', 
    items: [{ name: 'test name' }], 
    lastPage: 8
  });
  expect(state).toEqual({
    items: [{ name: 'test name' }],
    nextPage: 2,
    isLoading: false,
    allLoaded: false,
    lastPage: 8
  });
});

test('should set requestItemPage state', () => {
  const currentState = {
    items: [{ name: 'test name' }],
    nextPage: 2,
    isLoading: false,
    allLoaded: false
  };
  const state = items(currentState, { 
    type: 'REQUEST_ITEM_PAGE', 
    items: [{ name: 'test name' }], 
    nextPage: 3
  });
  expect(state).toEqual({
    items: [{ name: 'test name' }],
    nextPage: 3,
    isLoading: true,
    allLoaded: false,
  });
});

test('should set receiveItemPage state', () => {
  const currentState = {
    items: [{ name: 'name1' }],
    nextPage: 3,
    isLoading: false,
    allLoaded: false,
    lastPage: 3
  };
  const state = items(currentState, { 
    type: 'RECEIVE_ITEM_PAGE', 
    items: [{ name: 'name2' }], 
    nextPage: 3
  });
  expect(state).toEqual({
    items: [{name:'name1'},{name:'name2'}],
    isLoading: false,
    nextPage: 4,
    allLoaded: true,
    lastPage: 3
  });
});
const items = (state = [], action) => {
  switch(action.type) {
    // returns new items array from old array plus new item id at end
    case 'ADD_ITEM':
      return [...state, action.id];
    case 'REQUEST_ITEMS':
      return {
        ...state,
        items: null,
        nextPage: 2,
        isLoading: true,
        allLoaded: false,
        query: action.query || ''
      }
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        items: action.items,
        isLoading: false,
        lastPage: action.lastPage
      }
    case 'REQUEST_ITEM_PAGE':
      return {
        ...state,
        nextPage: action.nextPage,
        isLoading: true
      }
    case 'RECEIVE_PAGE_ITEMS':
      const newItems = state.items.slice();
      // mutate items copy by merging with new items
      Array.prototype.push.apply(newItems, action.items);
      return {
        ...state,
        items: newItems,
        isLoading: false,
        nextPage: action.nextPage + 1,
        allLoaded: action.nextPage >= state.lastPage
      }
    default:
      return state;
  }
};

export default items;

// state selectors
export const getQuery = (state) => state.items.query;
export const getLastPage = (state) => state.items.lastPage;

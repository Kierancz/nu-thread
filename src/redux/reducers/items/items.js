const items = (state = [], action) => {
  switch(action.type) {
    case 'REQUEST_ITEMS':
      return {
        ...state,
        items: null,
        nextPage: 2,
        isLoading: true,
        allLoaded: false,
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
      const items = state.items.slice();
      // mutate items copy by merging with new items
      Array.prototype.push.apply(items, action.items);
      return {
        ...state,
        items,
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
export const getLastPage = (state) => state.items.lastPage;

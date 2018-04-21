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
        isLoading: true
      }
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        items: action.items,
        isLoading: false
      }
    case 'REQUEST_ITEM_PAGE':
      return {
        ...state,
        nextPage: action.nextPage,
        isLoading: true
      }
    case 'RECEIVE_PAGE_ITEMS':
      console.log('RECEIVE_PAGE_ITEMS action: ', action);
      const items = state.items.slice();
      // mutate items copy by merging with new items
      Array.prototype.push.apply(items, action.items);
      return {
        ...state,
        nextPage: action.nextPage + 1,
        items: items,
        isLoading: false
      }
    default:
      return state;
  }
};

export default items;

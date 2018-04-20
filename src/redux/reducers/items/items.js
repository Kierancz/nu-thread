const items = (state = [], action) => {
  switch(action.type) {
    // returns new items array from old array plus new item id at end
    case 'ADD_ITEM':
      return [...state, action.id];
    case 'REQUEST_ITEMS':
      return {
        ...state,
        isLoading: true
      }
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        items: action.items,
        isLoading: false
      };
    case 'REQUEST_ITEM_PAGE':
      return {
        ...state,
        page: action.page,
        isLoading: true
      }
    case 'RECEIVE_PAGE_ITEMS':
      const items = state.items.slice();
      // mutate items copy by merging with new items
      Array.prototype.push.apply(items, action.items);
      return {
        ...state,
        page: action.page + 1,
        items: items,
        isLoading: false
      }
    default:
      return state;
  }
};

export default items;

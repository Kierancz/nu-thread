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
    default:
      return state;
  }
};

export default items;

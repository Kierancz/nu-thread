const items = (state = [], action) => {
  switch(action.type) {
    // returns new items array from old array plus new item id at end
    case 'ADD_ITEM':
      return [...state, action.id];
    case 'ITEMS_LOADED':
      console.log("in ITEMS_LOADED reducer");
      return {...state, items: action.items};
    default:
      return state;
  }
};

export default items;


// selector to return filtered items
export const getFilteredItems = (state, filter) => {
  console.log('in getFilteredItems selector.');
  const allItems = state.items;
  switch(filter) {
    case 'SHOW_ALL':
      return allItems;
    case 'PRICE_ASC':
      return allItems.slice().sort((a, b) => {
        return (
          parseFloat(
            a
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
          -
          parseFloat(
            b
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
        );
      });
    case 'PRICE_DESC':
      return allItems.slice().sort((a, b) => {
        return (
          parseFloat(
            b
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
          -
          parseFloat(
            a
            .sellingStatus[0]
            .convertedCurrentPrice[0]
            .__value__
          )
        );
      });
    default:
      return allItems;
  }
}

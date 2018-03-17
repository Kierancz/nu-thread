const filter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default filter;

// selector to return filtered items
export const getFilteredItems = (state, filter) => {
  const allItems = state.items.items;
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

const items = (state = [], action) => {
  console.log('in items reducer.');
  switch(action.type) {
    default:
     return state;
  }
} 

export default items;

export const getFilteredItems = (state, filter) => {
  console.log('in getFilteredItems selector.');
  switch(filter) {
    case 'SHOW_ALL':
      return state;
    case 'PRICE_ASC':
      return state.slice().sort((a, b) => {
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
      return state.slice().sort((a, b) => {
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
      return state;
  }
}
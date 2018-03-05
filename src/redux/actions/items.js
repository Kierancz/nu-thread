export const SET_FILTER = "SET_FILTER";
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";


export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const requestItems = () => {
  return {
    type: 'REQUEST_ITEMS',
  };
};

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    items
  }
}

export const SET_FILTER = "SET_FILTER";
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const REQUEST_ITEM_PAGE = "REQUEST_ITEM_PAGE";
export const RECEIVE_PAGE_ITEMS = "RECEIVE_PAGE_ITEMS";


export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const requestItems = (query) => {
  return {
    type: 'REQUEST_ITEMS',
    query
  };
};

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    items
  }
}

export const requestItemPage = (nextPage) => {
  return {
    type: 'REQUEST_ITEM_PAGE',
    nextPage
  };
};

export const receivePageItems = (nextPage, items) => {
  return {
    type: 'RECEIVE_PAGE_ITEMS',
    nextPage,
    items
  }
}

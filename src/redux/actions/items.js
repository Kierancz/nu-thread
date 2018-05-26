export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const REQUEST_ITEM_PAGE = "REQUEST_ITEM_PAGE";
export const RECEIVE_ITEM_PAGE = "RECEIVE_ITEM_PAGE";

export const requestItems = (query) => {
  return {
    type: 'REQUEST_ITEMS',
    query
  };
};
export const receiveItems = (items, lastPage) => {
  return {
    type: 'RECEIVE_ITEMS',
    items,
    lastPage
  }
}
export const requestItemPage = (nextPage) => {
  return {
    type: 'REQUEST_ITEM_PAGE',
    nextPage
  };
};
export const receiveItemPage = (nextPage, items) => {
  return {
    type: 'RECEIVE_ITEM_PAGE',
    nextPage,
    items
  }
}


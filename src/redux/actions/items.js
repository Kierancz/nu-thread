export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const loadItems = () => {
  return {
    type: 'LOAD_ITEMS'
  };
};

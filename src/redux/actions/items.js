const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export default setFilter;

export const loadItems = () => {
  return {
    type: LOAD_ITEMS
  };
};
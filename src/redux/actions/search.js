export const ADD_QUERY = "ADD_QUERY";
export const ADD_CONFIG = "ADD_CONFIG";
export const ADD_SORT_TYPE = "ADD_SORT_TYPE";

export const addSortType = (sortType) => {
  return {
    type: 'ADD_SORT_TYPE',
    sortType
  };
};
export const addQuery = (query) => {
  return {
    type: 'ADD_QUERY',
    query
  };
};
export const addConfig = (config) => {
  return {
    type: 'ADD_CONFIG',
    config
  };
};
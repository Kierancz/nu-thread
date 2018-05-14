export const ADD_QUERY = "ADD_QUERY";
export const ADD_CONFIG = "ADD_CONFIG";

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
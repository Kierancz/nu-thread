const initialState = {
  config: {
    brands: ["L.L. Bean", "Orvis", "Outdoor Research", "Eddie Bauer", "Patagonia"]
  },
  sortType: "SHOW_ALL"
};

const search = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_QUERY':
      return {
        ...state,
        query: action.query
      };
    case 'ADD_CONFIG':
      return {
        ...state,
        config: action.config
      };
    case 'ADD_SORT_TYPE': 
      return {
        ...state,
        sortType: action.sortType
      }
    default:
      return state;
  }
};
  
export default search;

// state selectors
export const getQuery = (state) => state.search.query;
export const getConfig = (state) => state.search.config;
export const getSortType = (state) => state.search.sortType;


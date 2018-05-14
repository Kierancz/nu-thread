const initialState = {
  config: {
    brands: ["L.L. Bean", "Orvis", "Outdoor Research", "Eddie Bauer", "Patagonia"]
  }
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
    default:
      return state;
  }
};
  
export default search;

// state selectors
export const getQuery = (state) => state.search.query;
export const getConfig = (state) => state.search.config;

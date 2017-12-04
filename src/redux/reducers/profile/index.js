const profile = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROFILE':
      return [
        ...state, 
        {
          gender: action.gender,
          upper: action.upper,
          fit: action.fit
        }
      ];
    default:
      return state;
  }
};

export default profile;
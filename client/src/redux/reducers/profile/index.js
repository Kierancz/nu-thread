const profile = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_PROFILE':
      return action.profile;
    default:
      return state;
  }
};

export default profile;

// profile state selector
export const getProfile = (state) => state.profile

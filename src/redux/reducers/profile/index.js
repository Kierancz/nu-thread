const profile = (state = [], action) => {
  console.log("in profile reducer. State: ", state);
  console.log("in profile reducer. Action: ", action);
  switch(action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export default profile;

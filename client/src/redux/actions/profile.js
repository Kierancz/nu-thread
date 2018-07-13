export const ADD_PROFILE = "ADD_PROFILE";

export const addProfile = (profile) => {
  return {
    type: 'ADD_PROFILE',
    profile
  };
};
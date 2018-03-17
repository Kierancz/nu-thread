export const ADD_PROFILE = "ADD_PROFILE";

const addProfile = (profile) => {
  return {
    type: 'ADD_PROFILE',
    profile
  };
};

export default addProfile;

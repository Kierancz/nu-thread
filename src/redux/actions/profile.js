const addProfile = (profile) => {
  console.log("in addProfile action. Profile: ", profile);
  return {
    type: 'ADD_PROFILE',
    profile
  };
};

export default addProfile;
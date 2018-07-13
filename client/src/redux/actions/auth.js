export const START_LOGIN = "START_LOGIN";
export const START_LOGOUT = "START_LOGOUT";

export const startLogin = () => {
  return {
    type: 'START_LOGIN',
  };
};
export const startLogout = () => {
  return {
    type: 'START_LOGOUT',
  };
};
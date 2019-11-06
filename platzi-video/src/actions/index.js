export const actions = {
  setFavorites: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  signinRequest: 'SIGNIN_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  searchItem: 'SEARCH_ITEMS',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorites,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = () => ({
  type: actions.logoutRequest,
});

export const signinRequest = (payload) => ({
  type: actions.signinRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});

export const searchItem = (payload) => ({
  type: actions.searchItem,
  payload,
});

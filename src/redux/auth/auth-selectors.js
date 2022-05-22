const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelector = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
};

export default authSelector;

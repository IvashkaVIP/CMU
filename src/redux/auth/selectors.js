export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsError = (state) => state.auth.isError;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserMail = (state) => state.auth.user.email;
export const selectUserPass = (state) => state.auth.user.pass;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsToken = (state) => state.auth.token;
export const selectIsProfile = (state) => state.auth.profile;

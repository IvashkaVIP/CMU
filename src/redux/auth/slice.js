import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, refreshUser, createProfile } from './operations';

const initialState = {
  user: { name: null, email: null, pass: ''},
  token: null,
  profile: null,
  isLoggedIn: false,
  isError: null,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError(state) {
      state.isError = null;
    },
    resetUser(state) {      
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.rejected, (state, action) => {
        state.isError = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        // console.log(' Slice: signup : email  ', action.payload.user.email);
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.username;
        state.user.pass = action.meta.arg.password;
        // state.token = action.payload.access_token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.email = action.meta.arg.username;
        state.user.name = action.payload.username;
        state.user.pass = action.meta.arg.password;
        state.token = action.payload.access_token;
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        // state.user.email = action.meta.arg.username;
        // state.user.name = action.payload.username;
        // state.token = action.payload.access_token;
        // state.isLoggedIn = true;
        state.isError = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isError = null;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isError = action.payload;
      })
      .addCase(createProfile.fulfilled, (state) => {
        state.profile = true;        
      })
      ;
  },
});

export const authReducer = authSlice.reducer;
export const { resetError, resetUser } = authSlice.actions;



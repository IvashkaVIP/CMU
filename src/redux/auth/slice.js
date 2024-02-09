import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isError: null,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signup.rejected, (state, action) => {        
        state.isError = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user.email = action.meta.arg.username;
        state.user.name = action.username;
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.email = action.meta.arg.username;
        state.user.name = action.payload.username;
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
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
      });
  },
});

export const authReducer = authSlice.reducer;



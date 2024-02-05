import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, refreshUser } from './operations';

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user.email = action.meta.arg.username;
        state.user.name = 'Mudick';
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action.arg);
        state.user.email = action.meta.arg.username;
        state.user.name = 'Mudick';
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
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



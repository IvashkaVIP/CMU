import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = `https://cmu-cmuproject.koyeb.app/`;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}auth/signup`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });      
      setAuthHeader(res.data.token);
      // console.log(res);
      return res.data; 
    } catch (error) {
      
      // console.log(error.response.data); // Объект ответа сервера
      // console.log(error.response.status); // Код состояния HTTP      
      
      return thunkAPI.rejectWithValue(
        {code: error.response.status, message: error.response?.data?.detail || 'Unknown error'}
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'api/auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('api/auth/logout');      
      delete axios.defaults.headers.common.Authorization;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {      
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {      
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      // setAuthHeader(res.data.access_token);      
      console.log('operations Reg Try : ', res.data);            
      return res.data; 
    } catch (error) {     
      
      console.log("operations Reg Catch : ", error.message)            

      return thunkAPI.rejectWithValue({
        code: error.response.status || 'undefined code',
        message: error.response?.data?.detail || 'unknown error',
      });
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
      setAuthHeader(res.data.access_token);      
      console.log("operations Login Try: ", res)
      return res.data;
    } catch (error) {
      console.log(
        'operations Login Catch : ',
        error.message,
        error.response.status,
        error.response.data.detail
      );            
      return thunkAPI.rejectWithValue({
        code: error.response.status || 'undefined code',
        message: error.response?.data?.detail || 'unknown error',
      });
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.patch(`${BASE_URL}auth/logout`);      
      delete axios.defaults.headers.common.Authorization;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {      
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {      
      setAuthHeader(persistedToken);
      const res = await axios.get(`${BASE_URL}auth/refresh_token`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProfile = createAsyncThunk(
  'auth/createProfile',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        `${BASE_URL}profiles/create-profile`,
        credentials,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );      
      console.log('operations creatProfile Try: ', res);
      return res.data;
    } catch (error) {
      console.log(
        'operations creatProfile Catch : ',
        error.message,
        error.response.status,
        error.response.data.detail
      );
      return thunkAPI.rejectWithValue({
        code: error.response.status || 'undefined code',
        message: error.response?.data?.detail || 'unknown error',
      });
    }
  }
);
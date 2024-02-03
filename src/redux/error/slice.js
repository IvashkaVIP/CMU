import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'isError',
  initialState: null,
  reducers: {
    setError: (_, action) => action.payload,
    clearError: () => null,
  },
});

export const { setError, clearError } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
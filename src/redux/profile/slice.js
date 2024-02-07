import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickname: '',
    age: null,
    country: '',
    avatar: '',
    
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setNickname: (_, action) => action.profile.nickname,
    setAge: (_, action) => action.profile.age,
    setCountry: (_, action) => action.profile.country,
    setAvatar: (_, action) => action.profile.avatar,
  },
});

export const { setNickname, setAge, setCountry, setAvatar } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
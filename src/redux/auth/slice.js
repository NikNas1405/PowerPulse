import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { updateUser } from '../settings/operations';

const initialState = {
  user: {
    name: null,
    email: null,
    blood: 1,
    sex: 'male',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    levelActivity: 1,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isUserParams: false,
};

const checkUserParams = (user) => {
  const defaultUserDate = {
    blood: 1,
    sex: 'male',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    levelActivity: 1,
  };

  return (
    user.sex === defaultUserDate.sex &&
    user.blood === defaultUserDate.blood &&
    user.height === defaultUserDate.height &&
    user.currentWeight === defaultUserDate.currentWeight &&
    user.desiredWeight === defaultUserDate.desiredWeight &&
    user.levelActivity === defaultUserDate.levelActivity
  );
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          name: action.payload.user.name,
          email: action.payload.user.email,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isUserParams = checkUserParams(state.user);
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
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isUserParams = checkUserParams(state.user);
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.isUserParams = false;
      }),
});

export const authReducer = authSlice.reducer;

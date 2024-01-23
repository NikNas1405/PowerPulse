import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { updateUser, updatedUserAvatar } from '../settings/operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  bmr: null,
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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isUserParams = checkUserParams(state.user);
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
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(action.payload.bmr);
        state.user = {
          ...state.user,
          ...action.payload.user,
        };
        state.bmr = action.payload.bmr; // Update this line to access bmr from the root
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isUserParams = checkUserParams(state.user);
      })
      .addCase(updatedUserAvatar.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(updatedUserAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.isUserParams = false;
      }),
});

export const authReducer = authSlice.reducer;

// state.user = action.payload;
// // state.bmr = action.payload;
// state.isLoggedIn = true;
// state.isRefreshing = false;
// state.isUserParams = checkUserParams(state.user);
// state.user = {
//   ...state.user,
//   ...action.payload.user,
// };
// Add the new field to the user

// state.user.bmr = {
//   ...state.user,
//   bmr: action.payload.bmr,
// };

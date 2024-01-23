import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = 'https://powerpulserver.onrender.com/api';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        toast.info('Unable to get user');
        return thunkAPI.rejectWithValue('Token not available');
      }

      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');

      return res.data.user;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'updateUser',

  async (userForm, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        toast.info('Unable to get user');
        return thunkAPI.rejectWithValue('Token not available');
      }
      setAuthHeader(persistedToken);
      delete userForm.avatarURL;
      delete userForm.userParams;
      delete userForm.createdAt;

      const res = await axios.patch('/auth/params', userForm);

      return { user: res.data.user, bmr: res.data.bmr };
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updatedUserAvatar = createAsyncThunk(
//   'auth/avatar',
//   async (avatarURL, thunkAPI) => {
//     try {
//       //avatarURL =
//       // 'https://static01.nyt.com/images/2021/07/18/books/review/Braithwaite1/Braithwaite1-superJumbo.jpg?quality=75&auto=webp';
//       const res = await axios.patch('/auth/avatar', avatarURL);
//       toast.success('Avatar updated');
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       toast.error(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const updatedUserAvatar = createAsyncThunk(
  'auth/avatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const res = await axios.patch('/auth/avatar', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      toast.success('Avatar updated');
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addUserData = createAsyncThunk(
//   'auth/addUserData',
//   async (data, thunkAPI) => {
//     try {
//       const res = await axios.patch('/****', data);
//       toast.success('Your profile updated');
//       return res.data;
//     } catch (error) {
//       toast.error(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

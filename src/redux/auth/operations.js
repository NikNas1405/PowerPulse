import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://powerpulserver.onrender.com/api';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// SignUp
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      console.log(error);
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// SignIn
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      toast.error('Please check your email or password', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// LogOut
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// RefreshUser
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
      const { data } = await axios.get('/auth/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

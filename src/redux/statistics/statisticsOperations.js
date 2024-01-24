import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://powerpulserver.onrender.com/api';

export const getStatistics = createAsyncThunk(
  'statistics/getStatistics',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/statistics');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

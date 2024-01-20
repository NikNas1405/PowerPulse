import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addDiaryProducts = createAsyncThunk(
  'user/diary/products/addDiaryProducts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/diary/products', data);

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { updateDiaryData } from './diarySlice';

axios.defaults.baseURL = 'https://powerpulserver.onrender.com/api';

export const fetchDiaryData = () => async (dispatch) => {
  try {
    const response = await axios.get('user/diary/:data');
    dispatch(updateDiaryData(response.data));
  } catch (error) {
    console.error('Error fetching diary data:', error);
  }
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addDiaryProducts = createAsyncThunk(
  'user/diary/products/addDiaryProducts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('user/diary/products', data);

      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

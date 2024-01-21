import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getAllDiaryInformation = createAsyncThunk(
  '/diary/getAllDiaryInformation',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`/diary/${date}`);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryProducts = createAsyncThunk(
  '/diary/products/addDiaryProducts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/diary/products', data);
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryProducts = createAsyncThunk(
  '/diary/products/deleteDiaryProducts',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/products/${productId}`);

      console.log(response.data); //THERE

      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryExercise = createAsyncThunk(
  '/diary/products/addDiaryExercise',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/diary/exercises', data);
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryExercise = createAsyncThunk(
  '/diary/exercises/deleteDiaryExercise',
  async (exerciseId, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/exercises/${exerciseId}`);

      console.log(response.data); //THERE

      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

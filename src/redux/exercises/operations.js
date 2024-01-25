import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchExercisesCategories = createAsyncThunk(
  '/exercises/filter',
  async (getfilter, thunkAPI) => {
    try {
      const { filter } = getfilter;

      const response = await axios.get(`/exercises/filter?filter=${filter}`);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExercisesList = createAsyncThunk(
  '/exercises/exercises/fetchExercisesList',
  async (filters, thunkAPI) => {
    const { filterList } = filters;

    try {
      const response = await axios.get(
        `/exercises/filter/:bodyPart?bodyPart=${filterList.toLowerCase()}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExercises = createAsyncThunk(
  'exercises/addExercises',
  async (exercise, thunkAPI) => {
    try {
      const responce = await axios.post('/exercises', exercise);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

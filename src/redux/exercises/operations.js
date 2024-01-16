import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllExercisesCategories = createAsyncThunk(
  '/user/exercises/categories/fetchAllProductsCategory',
  async (_, thunkAPI) => {
    try {
      // const filter = useSelector(getFilter);
      const response = await axios.get(`/user/exercises/categories?`);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// import exercisesData from '../exercises/files/filters.json';

// export const fetchAllExercisesCategories = createAsyncThunk(
//   'categories/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       return exercisesData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// export const fetchAllExercisesCategories = createAsyncThunk(
//   '/user/exercises/categories/fetchAllExercisesCategories',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`/user/exercises/categories`);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(`${error.message}`);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchExercisesCategories = createAsyncThunk(
  '/exercises/filter',
  async (getfilter, thunkAPI) => {
    try {
      const { filter } = getfilter;
      // const getFilter = (slug) => {
      //   let result = '';
      //   for (var i = 0; i < slug.length; i++) {
      //     if (i > 0 && slug[i] === slug[i].toUpperCase()) {
      //       result += ' ' + slug[i].toLowerCase();
      //     } else {
      //       result += slug[i];
      //     }
      //   }
      //   let final = result[0].toUpperCase() + result.substring(1);
      //   return final;
      // };
      // const result = getFilter(filter);

      console.log('filter', filter);
      // console.log('result', result);
      // const newFilter = filter.toLowerCase();
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
    const { filter, filterList } = filters;
    console.log('filterOper', filter);
    console.log('filterListOper', filterList);

    const transformFilter = (filter) => {
      switch (filter) {
        case 'Body parts':
          return 'bodyPart';
        case 'Equipment':
          return 'equipment';
        case 'Muscles':
          return 'target';
        default:
          return filter.toLowerCase(); // Use lowercase for other cases
      }
    };
    try {
      const response = await axios.get(
        `/exercises/filter/:${transformFilter(filter)}?${transformFilter(
          filter
        )}=${filterList.toLowerCase()}`
      );
      //----------------------------------------------------------------
      // const response = await axios.get(
      //   `/exercises/:filter/:bodyPart?bodyPart=${filterList.toLowerCase()}`
      // );
      //----------------------------------------------------------------
      // const response = await axios.get(
      //   `/exercises/:filter/:target?target=${filterList.toLowerCase()}`
      // );
      //----------------------------------------------------------------
      // const response = await axios.get(
      //   `/exercises/:filter/:equipment?equipment=${filterList.toLowerCase()}`
      // );
      //----------------------------------------------------------------
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
// import exercisesData from '../exercises/files/filters.json';

// export const fetchAllExercisesCategories = createAsyncThunk(
//   'categories',
//   async (_, thunkAPI) => {
//     try {
//       return exercisesData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

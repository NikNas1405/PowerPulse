import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products');
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchAllProducts = createAsyncThunk(
//   'user/products/fetchAllProducts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/user/products');
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(`${error.message}`);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchAllProductsCategories = createAsyncThunk(
  'products/fetchAllProductsCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/productsCategory');
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredProducts = createAsyncThunk(
  'user/products/fetchFilteredProducts',
  async (formData, thunkAPI) => {
    const { title, category, groupBloodNotAllowed } = formData;
    const filters = {};

    if (title !== '' && title) {
      filters.title = title;
    }

    if (category !== null && category) {
      // filters.category = category.toLowerCase();
      filters.category = category;
    }

    if (groupBloodNotAllowed !== null && groupBloodNotAllowed) {
      filters.groupBloodNotAllowed = groupBloodNotAllowed;
    }

    const options = new URLSearchParams({
      ...filters,
    });

    try {
      const response = await axios.get(`/user/products?${options}`);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

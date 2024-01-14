import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io';

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
//   'products/fetchAllProducts',
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
  'products/fetchFilteredProducts',
  async (formData, thunkAPI) => {
    const { search, category, recommended } = formData;
    const filters = {};

    if (search !== '' && search) {
      filters.search = search;
    }

    if (category !== null && category) {
      filters.category = category;
    }

    if (recommended !== null && recommended) {
      filters.recommended = recommended;
    }

    const options = new URLSearchParams({
      ...filters,
    });

    try {
      const response = await axios.get(`/products?${options}`);

      // console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

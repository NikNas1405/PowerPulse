import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllProductsCategories = createAsyncThunk(
  '/user/products/categories/fetchAllProductsCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/user/products/categories');
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// фетч продуктів з фільтрами

export const fetchProducts = createAsyncThunk(
  'user/products/fetchFilteredProducts',
  async (formData, thunkAPI) => {
    const { title, category, filter } = formData;
    const params = {};

    if (title) {
      params.title = title;
    }

    if (category !== null) {
      params.category = category.toLowerCase();
    } else {
      params.category = category;
    }

    if (filter) {
      params.filter = filter;
    }

    try {
      const response = await axios.get(`/user/products/:allOnFilter`, {
        params,
      });

      console.log(params);
      console.log(response);

      return response.data.dataUser;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

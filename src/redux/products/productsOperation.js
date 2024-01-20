import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllProductsCategories = createAsyncThunk(
  '/user/products/categories/fetchAllProductsCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products/categories');
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'user/products/fetchProducts',
  async (formData, thunkAPI) => {
    const { title, category, filter } = formData;
    const params = {};

    if (title) {
      params.title = title.trim();
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
      const response = await axios.get(`/products/:allOnFilter`, {
        params,
      });
      return response.data.dataUser;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

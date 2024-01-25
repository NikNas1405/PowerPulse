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
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
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
      const response = await axios.get(`/products/filter`, {
        params,
      });
      return response.data.dataUser;
    } catch (error) {
      console.log(error);
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

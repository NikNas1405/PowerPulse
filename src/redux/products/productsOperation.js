import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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

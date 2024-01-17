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

// export const fetchProducts = createAsyncThunk(
//   'user/products/fetchFilteredProducts',
//   async (formData, thunkAPI) => {
//     const { title, category, groupBloodNotAllowed } = formData;
//     const filters = {};

//     if (title !== '' && title) {
//       filters.title = title;
//     }

//     if (category !== null && category) {
//       filters.category = category.toLowerCase();
//       // filters.category = category;
//     }

//     if (groupBloodNotAllowed !== null && groupBloodNotAllowed) {
//       filters.groupBloodNotAllowed = groupBloodNotAllowed;
//     }

//     const options = new URLSearchParams({
//       ...filters,
//     });

//     try {
//       // const response = await axios.get(`/user/products?${options}`);
//       const response = await axios.get(`/user/products/${options}`);
//       return response.data.dataUser;
//     } catch (error) {
//       console.log(error);
//       toast.error(`${error.message}`);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchProducts = createAsyncThunk(
  'user/products/fetchFilteredProducts',
  async (formData, thunkAPI) => {
    const { title, category, groupBloodNotAllowed } = formData;
    const filters = {};

    if (title) {
      filters.title = title;
    }

    if (category !== null) {
      filters.category = category.toLowerCase();
    } else {
      filters.category = category;
    }

    if (groupBloodNotAllowed) {
      filters.groupBloodNotAllowed = groupBloodNotAllowed;
    }

    try {
      const response = await axios.get(`/user/products`, {
        params: filters,
      });
      return response.data.dataUser;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
import { createSlice } from '@reduxjs/toolkit';

import { addDiaryProducts } from './diaryOperation';

const initialState = {
  consumedProductsArray: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddDiaryProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedProductsArray.push(action.payload);
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addDiaryProducts.pending, handlePending)
      .addCase(addDiaryProducts.fulfilled, handleAddDiaryProductsFulfilled)
      .addCase(addDiaryProducts.rejected, handleRejected),
});

export const diaryReducer = diarySlice.reducer;

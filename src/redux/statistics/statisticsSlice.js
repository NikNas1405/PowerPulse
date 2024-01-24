import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getStatistics } from './statisticsOperations';

const initialState = {
  statistics: {
    numberExercises: '0',
    allTotalCaloriesExercises: '0',
  },
  isLoading: false,
  isError: false,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getStatistics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
      })
      .addCase(getStatistics.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      }),
});

export const statisticsReducer = statisticsSlice.reducer;

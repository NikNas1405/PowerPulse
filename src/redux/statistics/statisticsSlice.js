import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getStatistics } from './statisticsOperations';

const initialState = {
  statistics: {
    numberExercises: '350',
    allTotalCaloriesExercises: '500',
  },
  isLoading: false,
  isRefreshing: false,
};

// "finalResult": {
// "numberRegistered": 83,
// "numberExercises": 1324,
// "allTotalAmount": 21300,
// "allTotalCalories": 44300,
// "allTotalTimeExercises": 1800,
// "allTotalCaloriesExercises": 4600
// }

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getStatistics.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload.statistics;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getStatistics.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const statisticsReducer = statisticsSlice.reducer;

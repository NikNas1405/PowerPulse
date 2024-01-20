import { createSlice } from '@reduxjs/toolkit';
// import { addDiaryProducts } from './diaryOperation';

// const initialState = {
//   consumedProductsArray: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handleAddDiaryProductsFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.consumedProductsArray.push(action.payload);
// };

// const diarySlice = createSlice({
//   name: 'diary',
//   initialState: initialState,
//   extraReducers: (builder) =>
//     builder
//       .addCase(addDiaryProducts.pending, handlePending)
//       .addCase(addDiaryProducts.fulfilled, handleAddDiaryProductsFulfilled)
//       .addCase(addDiaryProducts.rejected, handleRejected),
// });

const diarySlice = createSlice({
  name: 'diary',
  initialState: {
    dailyCaloryIntake: 0,
    dailyNormOfSports: 0,
    caloriesConsumed: 0,
    caloriesBurned: 0,
    restOfCalories: 0,
    restOfSports: 0,
    warningCalories: false,
    encouragementSports: false,
  },
  reducers: {
    updateDiaryData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateDiaryData } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;

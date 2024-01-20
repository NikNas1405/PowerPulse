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

import {
  getAllDiaryInformation,
  addDiaryProducts,
  deleteDiaryProducts,
} from './diaryOperation';

const initialState = {
  consumedProductsArray: [],
  completedExercisesArray: [],
  isLoading: false,
  error: null,
  allDiaryInformation: {},
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetAllDiaryInformationFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allDiaryInformation = action.payload;
};

const handleAddDiaryProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedProductsArray.push(action.payload);
};

const handleDeleteDiaryProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.consumedProductsArray.findIndex(
    (product) => product._id === action.payload._id
  );
  state.consumedProductsArray.splice(index, 1);
};
const diarySlice = createSlice({
  name: 'diary',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllDiaryInformation.pending, handlePending)
      .addCase(
        getAllDiaryInformation.fulfilled,
        handleGetAllDiaryInformationFulfilled
      )
      .addCase(getAllDiaryInformation.rejected, handleRejected)
      .addCase(addDiaryProducts.pending, handlePending)
      .addCase(addDiaryProducts.fulfilled, handleAddDiaryProductsFulfilled)
      .addCase(addDiaryProducts.rejected, handleRejected)
      .addCase(deleteDiaryProducts.pending, handlePending)
      .addCase(
        deleteDiaryProducts.fulfilled,
        handleDeleteDiaryProductsFulfilled
      )
      .addCase(deleteDiaryProducts.rejected, handleRejected),
});
// const diarySlice = createSlice({
//   name: 'diary',
//   initialState: {
//     dailyCaloryIntake: 0,
//     dailyNormOfSports: 0,
//     caloriesConsumed: 0,
//     caloriesBurned: 0,
//     restOfCalories: 0,
//     restOfSports: 0,
//     warningCalories: false,
//     encouragementSports: false,
//   },
//   reducers: {
//     updateDiaryData: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//   },
// });

export const { updateDiaryData } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;

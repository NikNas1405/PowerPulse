// import { createSlice } from '@reduxjs/toolkit';
// import { fetchExercises } from './operations';

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejecting = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const exercisesSlice = createSlice({
//   name: 'exercises',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchExercises.pending, handlePending)
//       .addCase(fetchExercises.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchExercises.rejected, handleRejecting)

//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejecting)

//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const contactId = action.payload;
//         const index = state.items.findIndex(
//           (contact) => contact.id === contactId
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleRejecting);
//   },
// });

// export const exercisesReducer = exercisesSlice.reducer;

//Selectors

// export const getExercises = (state) => state.exercises.items;
// export const getIsLoading = (state) => state.exercises.isLoading;
// export const getError = (state) => state.exercises.error;

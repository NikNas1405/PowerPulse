import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: 'body parts', // default value
  },
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.value = action.payload;
      },
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;
//selector
export const getFilter = (state) => state.filter.value;

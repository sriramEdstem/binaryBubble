import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  selected: 0,
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    updateArray(state, action) {
      state.array = action.payload;
    },
    updateSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { updateArray, updateSelected } = sortingSlice.actions;
export default sortingSlice.reducer;

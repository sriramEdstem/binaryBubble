import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  selected: 0,
  time: 0,
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
    setTime(state, action) {
      state.time = action.payload;
    },
  },
});

export const { updateArray, updateSelected, setTime } = sortingSlice.actions;
export default sortingSlice.reducer;

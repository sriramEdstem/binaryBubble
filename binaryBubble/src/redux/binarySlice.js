import { createSlice } from "@reduxjs/toolkit";

const BinarySlice = createSlice({
  name: "BinarySearch",
  initialState: {
    start: 0,
    end: 1000,
    numbers: [],
    output: null,
  },
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
  },
});

export const { setStart, setEnd, setNumbers, setOutput } = BinarySlice.actions;
export default BinarySlice.reducer;

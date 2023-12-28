import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    key: "",
    inactive: [],
    active: [],
    data: [],
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
      console.log(action.payload);
    },
    setInactive: (state, action) => {
      state.inactive = action.payload;
      console.log(action.payload);
    },
    setActive: (state, action) => {
      state.active = action.payload;
      console.log(action.payload);
    },
    setData: (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setKey, setInactive, setActive, setData } = dataSlice.actions;

export default dataSlice.reducer;

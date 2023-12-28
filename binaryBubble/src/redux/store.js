import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./bubbleSlice";
import binaryReducer from "./binarySlice";
const store = configureStore({
  reducer: {
    data: dataSlice,
    binary: binaryReducer,
  },
});

export default store;

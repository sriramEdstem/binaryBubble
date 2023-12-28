import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./bubbleSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;

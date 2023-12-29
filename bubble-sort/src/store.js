import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./bubbleSlice";

const store = configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});

export default store;

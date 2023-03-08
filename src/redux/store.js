import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./phonebookSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    filter: filterReducer,
  }
})
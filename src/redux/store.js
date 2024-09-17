import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./slices/LanguageSlice";

const store = configureStore({
  reducer: {
    lang: LanguageReducer,
  },
});

export default store;

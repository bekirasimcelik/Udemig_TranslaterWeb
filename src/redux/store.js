import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./slices/LanguageSlice";
import TranslateReducer from "./slices/TranslateSlice";

const store = configureStore({
  reducer: {
    lang: LanguageReducer,
    translate: TranslateReducer,
  },
});

export default store;

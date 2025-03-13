import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./LanguageSlice";

export const store = configureStore({
  reducer: {
      language: languageReducer
  }
})
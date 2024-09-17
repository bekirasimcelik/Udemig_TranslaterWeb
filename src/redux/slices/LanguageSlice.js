import { createSlice } from "@reduxjs/toolkit";
import LanguageSelect from "../../components/LanguageSelect";

const initialState = {
  isLoading: true,
  error: null,
  langs: [],
};

const lLnguageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: [],
  extraReducers: () => {},
});

export default LanguageSelect.reducer;

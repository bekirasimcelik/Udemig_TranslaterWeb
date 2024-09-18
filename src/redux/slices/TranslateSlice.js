import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  answer: "",
};

const translatedSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {},
});

export default translatedSlice.reducer;

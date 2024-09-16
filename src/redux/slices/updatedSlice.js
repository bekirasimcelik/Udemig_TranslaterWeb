import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  reducers: {},
});

export default updatedSlice;

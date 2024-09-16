import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    strError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    setUser: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
  },
});

export default classicSlice.reducer;

export const { setLoading, setError, setUser } = classicSlice.actions;

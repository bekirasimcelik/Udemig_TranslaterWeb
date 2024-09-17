import { createAsyncThunk } from "@reduxjs/toolkit";

const getLangs = createAsyncThunk("lang/getLanguages", async () => {
  return "payload";
});

export default getLangs;

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const getLangs = createAsyncThunk("lang/getLanguages", async () => {
  // API request
  const res = await api.get("/getLanguages");

  // response declared as payload
  return res.data.data.languages;
});

export default getLangs;

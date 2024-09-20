import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

export const getLangs = createAsyncThunk("lang/getLangs", async () => {
  // API request
  const res = await api.get("/getLanguages");

  // Declare the res as payload
  return res.data.data.languages;
});

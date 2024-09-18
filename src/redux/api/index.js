import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "07b28a1d43mshaa0d43d1cb81f9ap1cd8c5jsn6b304e630b65",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});

export default api;

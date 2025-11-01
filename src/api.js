import axios from "axios";

const api = axios.create({
  baseURL: "https://mycalendar-backend-a23r.onrender.com/api", // ✅ your backend URL
});

export default api;

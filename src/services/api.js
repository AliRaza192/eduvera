import axios from "axios";

const instance = axios.create({
  baseURL: "https://lms.clickoptimizer.net/api/",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Yeh line change karo
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

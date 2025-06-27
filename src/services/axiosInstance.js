import axios from "axios";
import { getToken } from "../utils/storage";

const axiosInstance = axios.create({
  baseURL: "https://lms.clickoptimizer.net/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

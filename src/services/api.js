import axios from "axios";

const instance = axios.create({
  baseURL: "https://lms.clickoptimizer.net/api/",
});

export default instance;

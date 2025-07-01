import axios from "axios";

const instance = axios.create({
  baseURL: "https://lms.clickoptimizer.net",
});

export default instance;

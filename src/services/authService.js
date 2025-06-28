import axios from "./api";

export const signUp = (data) => axios.post("/api/sign-up", data);
export const login = (data) => axios.post("/api/login", data);
export const verifyOtp = (data) => axios.post("/api/otp-verification", data);
export const verifyEmailDirect = (token) => axios.post("/api/email/verify", { token });
export const resendVerification = (data) =>
  axios.post("/api/resend-verification-link", data);
export const forgetPassword = (data) =>
  axios.post("/api/forget-password", data);
export const resetPassword = (data) => axios.post("/api/reset-password", data);
export const changePassword = (data, token) =>
  axios.post("/api/change-password", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const changeEmail = (data, token) =>
  axios.post("/api/email/change", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const logout = (token) =>
  axios.post(
    "/api/logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

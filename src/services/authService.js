import axiosInstance from "./axiosInstance";

export const signup = (data) => axiosInstance.post("/sign-up", data);
export const login = (data) => axiosInstance.post("/login", data);
export const logout = () => axiosInstance.post("/logout");
export const changeEmail = (data) => axiosInstance.post("/email/change", data);
export const verifyEmail = (data) => axiosInstance.post("/verify-email", data);
export const changePassword = (data) => axiosInstance.post("/change-password", data);
export const forgetPassword = (data) => axiosInstance.post("/forget-password", data);
export const otpVerification = (data) => axiosInstance.post("/otp-verification", data);
export const resetPassword = (data) => axiosInstance.post("/reset-password", data);  
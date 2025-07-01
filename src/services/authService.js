import instance from "./api";

export const signUp = (data) => instance.post("sign-up", data);
export const login = (data) => instance.post("login", data);
export const verifyOtp = (data) => instance.post("otp-verification", data);
export const verifyEmailDirect = (token) => instance.post("email/verify", { token });
export const resendVerification = (data) => instance.post("resend-verification-link", data);
export const forgetPassword = (data) => instance.post("forget-password", data);
export const resetPassword = (data) => instance.post("reset-password", data);
export const changePassword = (data, token) =>
  instance.post("change-password", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const changeEmail = (data, token) =>
  instance.post("email/change", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const logout = (token) =>
  instance.post("logout", {}, { headers: { Authorization: `Bearer ${token}` } });

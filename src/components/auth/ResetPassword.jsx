
// import { useState, useEffect } from "react";
// import {
//   Lock,
//   Eye,
//   EyeOff,
//   AlertCircle,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";
// import { resetPassword } from "../../services/authService";
// import { useNavigate, useLocation } from "react-router-dom";
// import toast from "react-hot-toast";

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email;

//   const [formData, setFormData] = useState({
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState({
//     strength: 0,
//     color: "bg-red-500",
//     text: "Weak",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     calculatePasswordStrength(formData.password);
//   }, [formData.password]);

//   const calculatePasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 6) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;
//     if (password.length >= 10) strength++;

//     let color = "bg-red-500",
//       text = "Weak";
//     if (strength >= 4) {
//       color = "bg-green-500";
//       text = "Strong";
//     } else if (strength === 3) {
//       color = "bg-blue-500";
//       text = "Medium";
//     } else if (strength === 2) {
//       color = "bg-yellow-500";
//       text = "Weak";
//     }
//     setPasswordStrength({ strength, color, text });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const token = location.state?.token;
//   console.log(token);
//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     if (!token) {
//       toast.error("Reset token is missing. Please restart the process.");
//       navigate("/forgot-password");
//       return;
//     }

//     setLoading(true);
//     try {
//       await resetPassword({
//         password: formData.password,
//         confirm_password: formData.confirmPassword,
//         reset_token: token,
//       });
//       toast.success("Your password has been changed successfully!");
//       navigate("/login");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to reset password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full translate-y-12 -translate-x-12"></div>

//         <div className="text-center mb-8 relative z-10">
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//             <Lock className="w-10 h-10 text-white" />
//           </div>
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
//             Change Password
//           </h2>
//           <p className="text-gray-600 text-lg">Create a new secure password</p>
//         </div>

//         <div className="space-y-6 relative z-10">
//           {/* New Password */}
//           <div className="group">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               New Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none bg-white/50 backdrop-blur-sm ${
//                   errors.password
//                     ? "border-red-400 bg-red-50/50"
//                     : "border-gray-200 hover:border-gray-300"
//                 }`}
//                 placeholder="Create a strong password"
//                 disabled={loading}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 p-1"
//                 disabled={loading}
//               >
//                 {showPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>
//             </div>

//             {/* Password Strength */}
//             {formData.password && (
//               <div className="mt-3">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="flex-1 bg-gray-200 rounded-full h-2">
//                     <div
//                       className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
//                       style={{
//                         width: `${(passwordStrength.strength / 5) * 100}%`,
//                       }}
//                     ></div>
//                   </div>
//                   <span
//                     className={`text-sm font-medium ${
//                       passwordStrength.strength <= 2
//                         ? "text-red-500"
//                         : passwordStrength.strength <= 3
//                         ? "text-yellow-500"
//                         : passwordStrength.strength <= 4
//                         ? "text-blue-500"
//                         : "text-green-500"
//                     }`}
//                   >
//                     {passwordStrength.text}
//                   </span>
//                 </div>
//               </div>
//             )}

//             {errors.password && (
//               <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
//                 <AlertCircle className="w-4 h-4" />
//                 {errors.password}
//               </p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div className="group">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Confirm New Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none bg-white/50 backdrop-blur-sm ${
//                   errors.confirmPassword
//                     ? "border-red-400 bg-red-50/50"
//                     : "border-gray-200 hover:border-gray-300"
//                 }`}
//                 placeholder="Confirm your new password"
//                 disabled={loading}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 p-1"
//                 disabled={loading}
//               >
//                 {showConfirmPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>
//             </div>

//             {formData.confirmPassword && (
//               <div className="mt-2 flex items-center gap-2">
//                 {formData.password === formData.confirmPassword ? (
//                   <>
//                     <CheckCircle className="w-4 h-4 text-green-500" />
//                     <span className="text-sm text-green-600">
//                       Passwords match
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     <AlertCircle className="w-4 h-4 text-red-500" />
//                     <span className="text-sm text-red-600">
//                       Passwords do not match
//                     </span>
//                   </>
//                 )}
//               </div>
//             )}

//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
//                 <AlertCircle className="w-4 h-4" />
//                 {errors.confirmPassword}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={handleSubmit}
//             disabled={
//               loading || !formData.password || !formData.confirmPassword
//             }
//             className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
//           >
//             {loading ? (
//               <>
//                 <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
//                 <span className="text-lg">Changing Password...</span>
//               </>
//             ) : (
//               <>
//                 <span className="text-lg">Change Password</span>
//                 <ArrowRight className="w-6 h-6" />
//               </>
//             )}
//           </button>

//           {/* Back to Login */}
//           <div className="text-center mt-6">
//             <p className="text-gray-600">
//               Remember your password?{" "}
//               <button
//                 type="button"
//                 onClick={() => navigate("/login")}
//                 className="text-purple-600 hover:text-purple-700 font-semibold"
//               >
//                 Sign In
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

import { useState, useEffect } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { resetPassword } from "../../services/authService";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Multiple sources se email aur token get karin
  const email = location.state?.email || sessionStorage.getItem('resetEmail');
  const token = location.state?.token || sessionStorage.getItem('resetToken');

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    strength: 0,
    color: "bg-red-500",
    text: "Weak",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Token ya email missing hai to redirect karin
    if (!token || !email) {
      toast.error("Reset token or email is missing. Please restart the process.");
      navigate("/forgot-password");
      return;
    }
    
    calculatePasswordStrength(formData.password);
  }, [formData.password, token, email, navigate]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (password.length >= 10) strength++;

    let color = "bg-red-500",
      text = "Weak";
    if (strength >= 4) {
      color = "bg-green-500";
      text = "Strong";
    } else if (strength === 3) {
      color = "bg-blue-500";
      text = "Medium";
    } else if (strength === 2) {
      color = "bg-yellow-500";
      text = "Fair";
    }
    setPasswordStrength({ strength, color, text });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (!token) {
      toast.error("Reset token is missing. Please restart the process.");
      navigate("/forgot-password");
      return;
    }

    console.log("Submitting password reset with:");
    console.log("Token:", token);
    console.log("Email:", email);
    console.log("Password length:", formData.password.length);

    setLoading(true);
    try {
      await resetPassword({
        password: formData.password,
        confirm_password: formData.confirmPassword,
        reset_token: token,
        email: email // Email bhi send karin agar API mein required hai
      });
      
      // Success ke baad sessionStorage clear karin
      sessionStorage.removeItem('resetToken');
      sessionStorage.removeItem('resetEmail');
      
      toast.success("Your password has been changed successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Reset password error:", err);
      const errorMessage = err.response?.data?.message || "Failed to reset password";
      toast.error(errorMessage);
      
      // Token invalid hai to forgot password pe redirect karin
      if (errorMessage.includes("invalid") || errorMessage.includes("expired")) {
        setTimeout(() => {
          navigate("/forgot-password");
        }, 2000);
      }
    } finally {
      setLoading(false);
    }
  };

  // Token ya email missing hai to loading state show karin
  if (!token || !email) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Redirecting...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Reset Password
          </h2>
          <p className="text-gray-600 text-lg">
            Create a new secure password for <span className="font-semibold text-purple-600">{email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* New Password */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none bg-white/50 backdrop-blur-sm transition-all ${
                  errors.password
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Create a strong password"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 p-1 transition-colors"
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Password Strength */}
            {formData.password && (
              <div className="mt-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{
                        width: `${(passwordStrength.strength / 5) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      passwordStrength.strength <= 2
                        ? "text-red-500"
                        : passwordStrength.strength <= 3
                        ? "text-yellow-500"
                        : passwordStrength.strength <= 4
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {passwordStrength.text}
                  </span>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Password should contain:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li className={formData.password.length >= 6 ? "text-green-600" : "text-gray-400"}>
                      At least 6 characters
                    </li>
                    <li className={/[A-Z]/.test(formData.password) ? "text-green-600" : "text-gray-400"}>
                      One uppercase letter
                    </li>
                    <li className={/[0-9]/.test(formData.password) ? "text-green-600" : "text-gray-400"}>
                      One number
                    </li>
                    <li className={/[^A-Za-z0-9]/.test(formData.password) ? "text-green-600" : "text-gray-400"}>
                      One special character
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {errors.password && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none bg-white/50 backdrop-blur-sm transition-all ${
                  errors.confirmPassword
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Confirm your new password"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 p-1 transition-colors"
                disabled={loading}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {formData.confirmPassword && (
              <div className="mt-2 flex items-center gap-2">
                {formData.password === formData.confirmPassword ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">
                      Passwords match
                    </span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-600">
                      Passwords do not match
                    </span>
                  </>
                )}
              </div>
            )}

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={
              loading || !formData.password || !formData.confirmPassword || 
              formData.password !== formData.confirmPassword
            }
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg">Changing Password...</span>
              </>
            ) : (
              <>
                <span className="text-lg">Change Password</span>
                <ArrowRight className="w-6 h-6" />
              </>
            )}
          </button>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Remember your password?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
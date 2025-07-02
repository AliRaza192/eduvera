// import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
// import { signUp } from "../../services/authService";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirm_password: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
//     if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.phone.trim()) newErrors.phone = "Phone is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password !== formData.confirm_password)
//       newErrors.confirm_password = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   setLoading(true);
//   try {
//     await signUp(formData);
//     toast.success("Account created. Please verify your email.");
//     console.log("Navigating to verify email page...");
//     navigate("/verify-email", { state: { email: formData.email } });
//     setFormData({
//       first_name: "",
//       last_name: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirm_password: ""
//     });
//   } catch (error) {
//     toast.error(error.response?.data?.message || "Signup failed.");
//       navigate("/verify-email", { state: { email: formData.email } }); // Forcefully route change
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
//       <div className="text-center mb-8">
//         <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Lock className="w-8 h-8 text-purple-600" />
//         </div>
//         <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
//         <p className="text-gray-600 mt-2">Join us by creating your account</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* First Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//           <input
//             type="text"
//             name="first_name"
//             value={formData.first_name}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all ${errors.first_name ? "border-red-500" : "border-gray-300"}`}
//             placeholder="First name"
//             disabled={loading}
//           />
//           {errors.first_name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.first_name}</p>}
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//           <input
//             type="text"
//             name="last_name"
//             value={formData.last_name}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all ${errors.last_name ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Last name"
//             disabled={loading}
//           />
//           {errors.last_name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.last_name}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-300"}`}
//               placeholder="Enter your email"
//               disabled={loading}
//             />
//           </div>
//           {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all ${errors.phone ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Phone number"
//             disabled={loading}
//           />
//           {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.phone}</p>}
//         </div>

//         {/* Password */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all ${errors.password ? "border-red-500" : "border-gray-300"}`}
//               placeholder="Enter your password"
//               disabled={loading}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               disabled={loading}
//             >
//               {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//             </button>
//           </div>
//           {errors.password && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.password}</p>}
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
//           <input
//             type="password"
//             name="confirm_password"
//             value={formData.confirm_password}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all ${errors.confirm_password ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Confirm your password"
//             disabled={loading}
//           />
//           {errors.confirm_password && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.confirm_password}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
//         >
//           {loading ? (
//             <>
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               Creating...
//             </>
//           ) : (
//             <>
//               Sign Up
//               <ArrowRight className="w-5 h-5" />
//             </>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;



import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, User, Phone } from "lucide-react";
import { signUp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirm_password)
      newErrors.confirm_password = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await signUp(formData);
      toast.success("Account created. Please verify your email.");
      console.log("Navigating to verify email page...");
      navigate("/verification", { state: { email: formData.email } });
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed.");
      navigate("/signup", { state: { email: formData.email } }); // Forcefully route change
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-lg p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full translate-y-12 -translate-x-12"></div>
        
        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Create Account
          </h2>
          <p className="text-gray-600 text-lg">Join our amazing community today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                    errors.first_name ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="John"
                  disabled={loading}
                />
              </div>
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.first_name}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                    errors.last_name ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Doe"
                  disabled={loading}
                />
              </div>
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.last_name}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                  errors.email ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="john.doe@example.com"
                disabled={loading}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                  errors.phone ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="+1 (555) 123-4567"
                disabled={loading}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                  errors.password ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Create a strong password"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors p-1"
                disabled={loading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                  errors.confirm_password ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Confirm your password"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors p-1"
                disabled={loading}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {errors.confirm_password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            // onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg">Creating Account...</span>
              </>
            ) : (
              <>
                <span className="text-lg">Create Account</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
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

export default SignUpForm;
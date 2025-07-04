// import { useState } from "react";
// import { Mail, ArrowRight, AlertCircle } from "lucide-react";
// import { forgetPassword } from "../../services/authService";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);
//     try {
//       await forgetPassword({ email });
//       toast.success("OTP sent to your email");
//       navigate("/otp-verification", { state: { email } });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8">
        
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
//             Forgot Password
//           </h2>
//           <p className="text-gray-600">Enter your email to receive an OTP</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="group">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
//             <div className="relative">
//               <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl outline-none bg-white/50 backdrop-blur-sm ${
//                   error ? "border-red-400 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
//                 }`}
//                 placeholder="Enter your email"
//                 disabled={loading}
//               />
//             </div>
//             {error && (
//               <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
//                 <AlertCircle className="w-4 h-4" />
//                 {error}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg"
//           >
//             {loading ? "Sending OTP..." : (
//               <>
//                 <span>Send OTP</span>
//                 <ArrowRight className="w-5 h-5" />
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import { useState } from "react";
import { Mail, ArrowRight, AlertCircle } from "lucide-react";
import { forgetPassword } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Email validation
    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      console.log("Sending OTP to:", email);
      await forgetPassword({ email });
      toast.success("OTP sent to your email successfully!");
      
      // Email ko state mein pass karin
      navigate("/otp-verification", { state: { email } });
      
      // Backup: sessionStorage mein bhi store karin
      sessionStorage.setItem('forgotPasswordEmail', email);
      
    } catch (err) {
      console.error("Forgot password error:", err);
      const errorMessage = err.response?.data?.message || "Failed to send OTP";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear error when user starts typing
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="text-center mb-8 relative z-10">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Forgot Password
          </h2>
          <p className="text-gray-600 text-lg">
            Enter your email address to receive an OTP
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none bg-white/50 backdrop-blur-sm transition-all ${
                  error 
                    ? "border-red-400 bg-red-50/50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Enter your email address"
                disabled={loading}
                autoComplete="email"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg">Sending OTP...</span>
              </>
            ) : (
              <>
                <span className="text-lg">Send OTP</span>
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

export default ForgotPassword;
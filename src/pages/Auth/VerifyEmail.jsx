// import { useState } from "react";
// import { resendVerification } from "../../services/authService";
// import { useLocation } from "react-router-dom";
// import toast from "react-hot-toast";
// import { Mail, RefreshCcw, ShieldCheck } from "lucide-react";

// const VerifyEmail = () => {
//   const location = useLocation();
//   const [email, setEmail] = useState(location.state?.email || "");
//   const [resendLoading, setResendLoading] = useState(false);

//   const handleResend = async () => {
//     if (!email.trim()) return toast.error("Enter your email to resend link");

//     setResendLoading(true);
//     try {
//       await resendVerification({ email });
//       toast.success("Verification link sent!");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to resend link");
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
//         <div className="text-center mb-6">
//           <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <ShieldCheck className="w-8 h-8 text-purple-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Verify Your Email</h2>
//           <p className="text-gray-600 mt-2">
//             A verification link has been sent to your email. Please check your inbox and click the link to verify your account.
//           </p>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
//                 placeholder="Your email"
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={handleResend}
//             disabled={resendLoading}
//             className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
//           >
//             {resendLoading ? (
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//             ) : (
//               <>
//                 <RefreshCcw className="w-5 h-5" />
//                 Resend Verification Link
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;


import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resendVerification } from "../../services/authService";
import toast from "react-hot-toast";
import { Mail, RefreshCw, CheckCircle } from "lucide-react";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResendEmail = async () => {
    if (!email.trim()) {
      return toast.error("Enter your email to resend link");
    }

    setLoading(true);
    try {
      await resendVerification({ email });
      setEmailSent(true);
      toast.success("Verification link sent!");
      setTimeout(() => setEmailSent(false), 3000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 w-full max-w-md p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full translate-y-12 -translate-x-12"></div>
        
        {/* Content */}
        <div className="text-center relative z-10">
          {/* Icon */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Mail className="w-12 h-12 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Please Verify Your Email
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-lg mb-2">
            We've sent a verification link to
          </p>
          <p className="text-purple-600 font-semibold text-lg mb-8">
            {email}
          </p>
          
          <p className="text-gray-500 text-sm mb-8">
            Click the link in your email to verify your account. If you don't see the email, check your spam folder.
          </p>

          {/* Success Message */}
          {emailSent && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-700 font-medium">Verification email sent successfully!</p>
            </div>
          )}

         

          {/* Resend Button */}
          <button
            onClick={handleResendEmail}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 mb-6"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg">Sending...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-6 h-6" />
                <span className="text-lg">Resend Verify Link</span>
              </>
            )}
          </button>

          {/* Back to Login */}
          <div className="text-center">
            <p className="text-gray-600">
              Already verified?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Back to Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

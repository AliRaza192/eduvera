
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyEmailDirect } from "../../services/authService";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const EmailVerificationHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // loading, success, error
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      // ✅ Token na ho to error state aur redirect to signup
      if (!token) {
        setStatus("error");
        toast.error("Invalid or missing verification link!");
        setTimeout(() => {
          navigate("/signup");
        }, 2000);
        return;
      }

      // ✅ Token mil gaya to API call
      try {
        await verifyEmailDirect(token);
        setStatus("success");
        toast.success("Email verified successfully!");

        // Success ke baad 2 seconds baad email-verified page par bhej do
        setTimeout(() => {
          navigate("/email-verified");
        }, 2000);
      } catch (error) {
        setStatus("error");
        toast.error(error.response?.data?.message || "Email verification failed");

        // Error ke baad 3 seconds baad signup page par bhej do
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">
        
        {/* Loading State */}
        {status === "loading" && (
          <>
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-10 h-10 text-purple-600 animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Verifying Your Email...
            </h2>
            <p className="text-gray-600">
              Please wait while we verify your email address.
            </p>
          </>
        )}

        {/* Success State */}
        {status === "success" && (
          <>
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Email Verified!
            </h2>
            <p className="text-gray-600">
              Redirecting you to success page...
            </p>
          </>
        )}

        {/* Error State */}
        {status === "error" && (
          <>
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Verification Failed
            </h2>
            <p className="text-gray-600 mb-6">
              The verification link is invalid or has expired.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Back to Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationHandler;

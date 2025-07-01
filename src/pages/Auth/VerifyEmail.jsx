import { useState } from "react";
import { resendVerification } from "../../services/authService";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { Mail, RefreshCcw, ShieldCheck } from "lucide-react";

const VerifyEmail = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [resendLoading, setResendLoading] = useState(false);

  const handleResend = async () => {
    if (!email.trim()) return toast.error("Enter your email to resend link");

    setResendLoading(true);
    try {
      await resendVerification({ email });
      toast.success("Verification link sent!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend link");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Verify Your Email</h2>
          <p className="text-gray-600 mt-2">
            A verification link has been sent to your email. Please check your inbox and click the link to verify your account.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleResend}
            disabled={resendLoading}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            {resendLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <RefreshCcw className="w-5 h-5" />
                Resend Verification Link
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

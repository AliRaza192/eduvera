import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendVerification } from "../../services/authService";
import toast from "react-hot-toast";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp({ email, otp });
      toast.success("Email verified successfully!");
      navigate("/email-verified");
    } catch (err) {
      toast.error(err.response?.data?.message || "Verification failed.");
    }
  };

  const handleResend = async () => {
    setResending(true);
    try {
      await resendVerification({ email });
      toast.success("OTP has been resent to your email.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-center">Verify Your Email</h2>
        <p className="text-center text-gray-600 mb-2">
          Enter the OTP sent to your email: {email}
        </p>
        <input
          type="text"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Didn't receive the OTP?</p>
          <button
            type="button"
            onClick={handleResend}
            className="text-blue-600 hover:underline text-sm mt-1"
            disabled={resending}
          >
            {resending ? "Resending..." : "Resend OTP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerification;

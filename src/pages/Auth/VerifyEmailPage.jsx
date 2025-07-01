import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyEmailDirect } from "../../services/authService";
import toast from "react-hot-toast";

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      toast.error("Invalid or missing token!");
      return;
    }

    const verifyToken = async () => {
      try {
        await verifyEmailDirect(token);
        toast.success("Email verified successfully!");
        navigate("/email-verified");
      } catch (error) {
        toast.error(error.response?.data?.message || "Email verification failed");
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading ? (
        <p className="text-lg font-medium">Verifying your email...</p>
      ) : (
        <p className="text-lg font-medium text-red-600">Failed to verify email.</p>
      )}
    </div>
  );
};

export default VerifyEmailPage;

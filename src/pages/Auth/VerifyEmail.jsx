import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyEmailDirect } from "../../services/authService";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyEmailDirect(token);
        toast.success("Email Verified Successfully!");
        navigate("/email-verified");
      } catch (err) {
        toast.error(err.response?.data?.message || "Verification Failed!");
      }
    };

    if (token) {
      verify();
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-lg">Verifying your email, please wait...</p>
    </div>
  );
};

export default VerifyEmail;

import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">

        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Email is Verified!</h2>
        <p className="text-gray-600 mb-6">Congratulations! Your account is now active. You can explore your dashboard.</p>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          Go to Dashboard
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default EmailVerified;

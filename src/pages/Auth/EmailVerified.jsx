import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const EmailVerified = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 text-center max-w-md space-y-4">
        <CheckCircle className="text-green-500 mx-auto" size={60} />
        <h2 className="text-2xl font-bold text-gray-800">Email Verified!</h2>
        <p className="text-gray-600">
          Your email has been successfully verified. You can now log in and access your courses.
        </p>
        <Link
          to="/login"
          className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default EmailVerified;

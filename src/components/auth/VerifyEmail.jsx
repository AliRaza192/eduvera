import { useState } from "react";
import { verifyEmail } from "../../services/authService";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail({ email, otp });
      setMsg("Email verified successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
      setMsg("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Verify Your Email</h2>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded"
      >
        Verify
      </button>
      {msg && <p className="text-green-600 text-sm">{msg}</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
};

export default VerifyEmail;

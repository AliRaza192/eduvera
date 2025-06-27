import { useState } from "react";
import { changeEmail } from "../../services/authService";

const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changeEmail({ email });
      setMsg("Verification email sent to new address.");
      setError("");
      setEmail("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMsg("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-semibold text-lg">Change Email</h3>
      <input
        type="email"
        placeholder="New Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded"
      >
        Change Email
      </button>
      {msg && <p className="text-green-600 text-sm">{msg}</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
};

export default ChangeEmail;

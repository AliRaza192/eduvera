import { useState } from "react";
import { signUp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signUp(formData);
      toast.success("Account created. Verify your email.");
      navigate("/otp-verification", { state: { email: formData.email } });
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-xl space-y-4">
      <h2 className="text-2xl font-bold text-center">Create an Account</h2>
      <div className="flex gap-2">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          className="w-1/2 border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="w-1/2 border p-2 rounded"
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;

// SignUp.jsx
import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
  FaApple,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-purple-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Welcome Text */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Create an Account
              </h2>
              <p className="text-gray-600">
                Join our learning community and start your educational journey
              </p>
            </div>

            {/* Sign Up Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="SignUpEmail"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="SignUpEmail"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="SignUpPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="SignUpPassword"
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Create a password"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Password must be at least 8 characters with uppercase,
                  lowercase, and number
                </p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Confirm your password"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 mt-1 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Create Account
              </button>
            </form>

            {/* Social Media Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <FaGoogle className="text-red-500" />
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <FaFacebook className="text-blue-600" />
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <FaApple className="text-gray-800" />
                </button>
              </div>
            </div>

            {/* Link to Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Why Join Our Learning Platform?
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    For Students
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Access to 750+ expert-led courses
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Learn at your own pace, anytime
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Earn certificates and build your portfolio
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Connect with a community of learners
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    For Instructors
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Share your expertise with a global audience
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Earn revenue from your course content
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Access to teaching tools and analytics
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Join our network of educational professionals
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Join over 1 million students and 120+ instructors already on
                  our platform
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

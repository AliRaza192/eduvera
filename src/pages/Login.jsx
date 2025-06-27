import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back!
              </h2>
              <p className="text-gray-600">
                Log in to access your courses and continue learning
              </p>
            </div>
            {/* Form */}
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


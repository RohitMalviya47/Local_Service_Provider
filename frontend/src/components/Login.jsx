// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <input
          type="email"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button
            className="text-indigo-500 hover:text-indigo-700 text-sm "
            onClick={() => navigate("/forgot-password")} // Navigate to forgot password page
          >
            Forgot Password?
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => navigate("/signup")} // Navigate to signup page
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

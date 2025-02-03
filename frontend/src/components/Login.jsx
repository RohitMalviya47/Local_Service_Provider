import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isLogin) {
      console.log("Logging in with", email, password);
    } else {
      console.log("Signing up with", name, email, password);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        {!isLogin && (
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
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
          {isLogin && (
            <button
              className="text-indigo-500 hover:text-indigo-700 text-sm "
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          )}
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
        <div className="text-center">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

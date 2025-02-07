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
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        {!isLogin && (
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-900 text-gray-900"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-900 text-gray-900"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-gray-900 text-gray-900"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          {isLogin && (
            <button
              className="text-gray-900 hover:underline text-sm"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          )}
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
        
        {/* New Button for Direct Home Navigation */}
        <div className="text-center mt-4">
        <button
            className="text-gray-900 hover:text-blue-700"
            onClick={() => navigate('/')} // Navigate back to login page
          >
            Back to Home
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            className="text-gray-900 hover:underline"
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

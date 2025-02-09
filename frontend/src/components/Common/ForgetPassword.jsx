// ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Hook to navigate

  const handleResetPassword = () => {
    // Handle password reset logic here
    console.log('Resetting password for', email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Reset Password</h2>
        <input
          type="email"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-red-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full bg-red-600 text-white py-3 rounded-lg mb-4 hover:bg-red-700 transition"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
        <div className="text-center">
          <button
            className="text-gray-900 hover:text-blue-700"
            onClick={() => navigate('/login')} // Navigate back to login page
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

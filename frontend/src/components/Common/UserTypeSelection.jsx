import React from "react";
import { useNavigate } from "react-router-dom";
import man from "../../assets/man.png"

const UserTypeSelection = ({ onUserSelect }) => {
  const navigate = useNavigate();

  const handleSelection = () => {
    onUserSelect();
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      <div className="flex w-3/4 max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Customer Section */}
        <div className="w-1/2 flex flex-col items-center justify-center p-6 border-r">
          <img
            src={man}
            alt="Customer Icon"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Join as a Customer</h2>
          <p className="text-gray-600 text-center mb-4">
            Get services from trusted providers in your area.
          </p>
          <button
            onClick={handleSelection}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            🏠 Customer
          </button>
        </div>

        {/* Provider Section */}
        <div className="w-1/2 flex flex-col items-center justify-center p-6">
          <img
            src={man}
            alt="Provider Icon"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Join as a Provider</h2>
          <p className="text-gray-600 text-center mb-4">
            Offer your services and connect with customers easily.
          </p>
          <button
            onClick={handleSelection}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
          >
            🛠 Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
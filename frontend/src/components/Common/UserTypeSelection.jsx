import React from "react";
import { useNavigate } from "react-router-dom";
import man from "../../assets/man.png";

const UserTypeSelection = ({ onUserSelect }) => {
  const navigate = useNavigate();

  const handleSelection = (userType) => {
    onUserSelect(userType);
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 hidden md:block">
        Are you a Customer or a Provider?
      </h2>

      <div className="w-full max-w-[600px] md:max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden p-2 sm:p-4 flex flex-col sm:flex-row sm:max-w-none gap-4 sm:gap-4">
        {/* Customer Section */}
        <button
          onClick={() => handleSelection("customer")}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 w-full h-20 sm:h-20 md:h-auto"
        >
          <img
            src={man}
            alt="Customer Icon"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-gray-300 shadow-lg"
          />
          🏠 Customer
        </button>

        {/* Provider Section */}
        <button
          onClick={() => handleSelection("provider")}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 w-full h-20 sm:h-20 md:h-auto"
        >
          <img
            src={man}
            alt="Provider Icon"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-gray-300 shadow-lg"
          />
          🛠 Provider
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;

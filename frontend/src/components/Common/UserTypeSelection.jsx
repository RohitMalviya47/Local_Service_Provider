import React from "react";
import { useNavigate } from "react-router-dom";
import man from "../../assets/man.png";

const UserTypeSelection = ({ onUserSelect }) => {
  const navigate = useNavigate();

  const handleSelection = (userType) => {
    localStorage.setItem("userType", userType);  
    onUserSelect(userType);
    navigate("/");  
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 hidden md:block">
        Are you a Customer or a Provider?
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-lg overflow-hidden p-6 gap-6">
        {/* Customer Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-gray-300">
          <button
            onClick={() => handleSelection("customer")}
            className="flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 w-full"
          >
            <img
              src={man}
              alt="Customer Icon"
              className="w-12 h-12 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-gray-300 shadow-lg"
            />
            <h2 className="text-center">🏠 Customer</h2>
          </button>
        </div>

        {/* Provider Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <button
            onClick={() => handleSelection("provider")}
            className="flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 w-full"
          >
            <img
              src={man}
              alt="Provider Icon"
              className="w-12 h-12 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-gray-300 shadow-lg"
            />
            <h2 className="text-center">🛠 Provider</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;

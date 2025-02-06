import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

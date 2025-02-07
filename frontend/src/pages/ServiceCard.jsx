import React from "react";

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <div className="w-full p-2" onClick={onClick}>
      <div className="flex flex-col items-center justify-center bg-transparent rounded-lg p-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100">
          <img src={image} alt={title} className="w-10 h-10" />
        </div>
        <p className="mt-2 text-center text-gray-800 font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;


import React from "react";

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <div
      className="service-card bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer border-4 border-red-500"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-24 h-24 object-cover" />
      </div>
      <h3 className="text-center text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default ServiceCard;

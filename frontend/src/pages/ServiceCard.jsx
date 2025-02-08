import React from "react";

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-transparent rounded-lg cursor-pointer" onClick={onClick}>
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-gray-100">
        <img src={image} alt={title} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
      </div>
      <p className="mt-2 text-center text-gray-800 font-semibold text-sm md:text-base lg:text-lg">{title}</p>
    </div>
  );
};

export default ServiceCard;

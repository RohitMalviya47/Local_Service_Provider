import React from "react";

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <div
      className="grid place-items-center  lg:w-40 bg-white rounded-2xl shadow-md cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 border-4 border-transparent rounded-2xl transition-all duration-500 ease-in-out group-hover:border-amber-500"></div>
      <div className="grid place-items-center w-10 h-10 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl  relative z-10 group-hover:border-amber-500">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
          onClick={(e) => {
            e.stopPropagation(); // Stop event bubbling
            onClick();
          }}
        />
      </div>
      <p className="mt-1 text-center text-gray-800 font-medium text-sm md:text-base lg:text-lg relative z-10 ">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;

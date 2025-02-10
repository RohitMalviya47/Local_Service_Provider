import React from "react";
import { useParams } from "react-router-dom";
import serviceData from "../../assets/serviceData"; // Service data import

const ServiceDetail = () => {
  const { serviceName } = useParams(); // URL se service ka naam le rahe hain
  const providers = serviceData[serviceName] || []; // Service data filter

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-center text-blue-600">Service: {serviceName}</h1>
      <p className="mt-2 text-gray-700 text-center text-md">Find the best service providers for {serviceName}:</p>

      {/* Scrollable List - Compact Cards */}
      <div className="mt-4 flex flex-wrap justify-center gap-4 overflow-y-auto max-h-screen pb-4">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white shadow-md p-4 rounded-lg flex items-center w-full max-w-sm border border-gray-200"
          >
            {/* Image on left */}
            <img
              src={provider.image}
              alt={provider.name}
              className="w-16 h-16 object-cover rounded-full border-2 border-blue-400"
            />
            
            {/* Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{provider.name} <span className="text-blue-500">✔</span></h3>
              <p className="text-gray-600 text-sm">⭐ {provider.rating} ({provider.reviews} reviews)</p>
              <p className="text-gray-600 text-sm">{provider.experience} Experience</p>
              <p className="text-gray-800 font-semibold">₹ {provider.price}</p>
              <p className={`text-sm font-semibold ${provider.availability ? "text-green-500" : "text-red-500"}`}>
                {provider.availability ? "Available Now" : "Not Available"}
              </p>
              
              {/* Button */}
              <button
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
              >
                Hire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;

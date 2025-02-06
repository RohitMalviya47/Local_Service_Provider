import React from "react";
import { useParams } from "react-router-dom";
import serviceData from "../assets/serviceData"; // Service data import

const ServiceDetail = () => {
  const { serviceName } = useParams(); // URL se service ka naam le rahe hain
  const providers = serviceData[serviceName] || []; // Service data filter

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600">Service: {serviceName}</h1>
      <p className="mt-4 text-gray-700 text-center text-lg">Here are the best service providers for {serviceName}:</p>

      {/* Desktop pe 4 items ek row me, 5th se naye row me */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white shadow-lg p-6 rounded-lg transition-all duration-300 hover:shadow-xl 
            flex flex-col md:flex-row md:items-center md:space-x-6 w-full border border-gray-300"
          >
            {/* Image: Mobile pe upar, Laptop pe left side */}
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full md:w-40 h-40 object-cover rounded-lg border-4 border-blue-400"
            />
            
            {/* Details */}
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-900">{provider.name}</h3>
              <p className="text-gray-600">{provider.experience} of Experience</p>
              <p className="text-yellow-500 font-semibold">⭐ Rating: {provider.rating}</p>
              <p className="text-gray-600">📍 Location: {provider.location}</p>
              <p className="text-gray-600">📞 Contact: {provider.contact}</p>

              {/* Button for Call or Hire */}
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
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

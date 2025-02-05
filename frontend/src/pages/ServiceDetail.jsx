import React from "react";
import { useParams } from "react-router-dom";
import serviceData from "../assets/serviceData" // Import the service data

const ServiceDetail = () => {
  const { serviceName } = useParams(); // URL se service ka naam le rahe hain

  // Service data ko filter kar rahe hain
  const providers = serviceData[serviceName] || [];

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-semibold">Service: {serviceName}</h1>
      <p className="mt-4 text-gray-600">Here are the service providers for {serviceName}:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {providers.map((provider) => (
          <div key={provider.id} className="bg-white shadow-lg p-4 rounded">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{provider.name}</h3>
            <p>{provider.experience} of Experience</p>
            <p>Rating: {provider.rating}</p>
            <p>Location: {provider.location}</p>
            <p>Contact: {provider.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;

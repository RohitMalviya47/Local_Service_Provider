import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceName } = useParams(); // URL se service ka naam le rahe hain

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-semibold">Service: {serviceName}</h1>
      <p className="mt-4 text-gray-600">Here we will show service providers for {serviceName}.</p>
    </div>
  );
};

export default ServiceDetail;

import React from "react";
import { useNavigate } from "react-router-dom";
import Electrician from '../assets/Electriction.png';
import Plumber from "../assets/plumber.jpeg";
import Carpenter from "../assets/plumber2.jpeg";
import Painter from "../assets/plumber3.jpeg";
import ServiceCard from "../pages/ServiceCard";

const ServicesGrid = () => {
  const navigate = useNavigate(); // Navigation hook

  const services = [
    { title: "Electrician", image: Electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },

  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-3xl font-semibold mb-5">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            onClick={() => navigate(`/service/${service.title}`)} // Navigate to service detail page
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

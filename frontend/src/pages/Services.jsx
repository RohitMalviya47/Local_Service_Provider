import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Electrician from '../assets/Electriction.png';
import Plumber from "../assets/plumber.jpeg";
import Carpenter from "../assets/plumber2.jpeg";
import Painter from "../assets/plumber3.jpeg";
import ServiceCard from "../pages/ServiceCard";
import SearchBar from "./SearchBar";

const Services = () => {
  const navigate = useNavigate(); // Navigation hook
  const [showAll, setShowAll] = useState(false);

  const services = [
    { title: "Electrician", image: Electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
  ];

  const servicesToShow = showAll ? services : services.slice(0, 4);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-3xl font-semibold mb-5">Our Services</h2>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {servicesToShow.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            onClick={() => navigate(`/service/${service.title}`)} // Navigate on click
          />
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-5">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            See All Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;

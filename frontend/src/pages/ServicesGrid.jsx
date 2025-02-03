import React from "react";
import Electrician from '../assets/Electriction.png';
import  Plumber from "../assets/plumber.jpeg"
import Carpenter from  "../assets/plumber2.jpeg"
import  Painter from  "../assets/plumber3.jpeg"
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  const services = [
    { title: "Electrician", image: Electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
    { title: "Electrician", image: Electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },

  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            onClick={() => alert(`${service.title} service clicked`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

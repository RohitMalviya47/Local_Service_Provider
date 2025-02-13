import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import electrician from '../assets/electrician.png';
import Plumber from "../assets/plumber.png";
import Carpenter from "../assets/carpenter.png";
import Painter from "../assets/painting.png";
import ServiceCard from "../components/Common/ServiceCard";
import SearchBar from "../components/Common/SearchBar";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const Services = () => {
  const navigate = useNavigate(); // Navigation hook
  const [showAll, setShowAll] = useState(false);

  const services = [
    { title: "electrician", image: electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
  ];

  const servicesToShow = showAll ? services : services.slice(0, 4);

  return (
    <>    <Header></Header>
    <div className="container mx-auto py-12 pt-72">
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
    <Footer></Footer>
    </>

  );
};

export default Services;

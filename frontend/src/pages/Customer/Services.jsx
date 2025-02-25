import React from "react";
import { useNavigate } from "react-router-dom";
import electrician from '../../assets/electrician.png';
import Plumber from "../../assets/plumber.png";
import Carpenter from "../../assets/carpenter.png";
import Painter from "../../assets/painting.png";
import ServiceCard from "../../components/Common/ServiceCard";
import SearchBar from "../../components/Common/SearchBar";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import backgroundImage from "../../assets/bg_services.jpg"; // Add your background image path

const Services = () => {
  const navigate = useNavigate(); // Navigation hook

  const services = [
    { title: "Electrician", image: electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
    { title: "Electrician", image: electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
    { title: "Electrician", image: electrician },
    { title: "Plumber", image: Plumber },
    { title: "Carpenter", image: Carpenter },
    { title: "Painter", image: Painter },
  ];

  return (
    <>
      <Header />
      <div
        className="container py-12 pt-72 bg-cover bg-center bg-no-repeat w-full h-1/4 bg-black"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <h2 className="text-center text-3xl font-semibold mb-5 text-white">Our Services</h2>
      <SearchBar />
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            onClick={() => navigate(`/service/${service.title}`)} // Navigate on click
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Services;

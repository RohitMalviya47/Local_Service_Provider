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
import BgImage from '../../assets/bg_pic1.webp'

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
     <div className="lg:py-10 bg-black"></div>
<div className="w-full py-10 flex flex-col md:flex-row justify-between items-center bg-black">
  <div className="w-full md:w-1/2 text-center md:text-left p-10">
    <h2 className="mb-4 text-gray-900 font-serif" style={{ fontSize: "60px", fontWeight: "bold" }}>
      Our Premium Services
    </h2>
    <p className="text-lg text-gray-700 mb-6 font-serif" style={{ fontSize: "30px", fontWeight: "bold" }}>
      We offer high-quality home services including electricians, plumbers, carpenters, and painters. Get reliable and professional services at your doorstep.
    </p>
  </div>
  <div className="w-full md:w-1/2 flex justify-end items-center">
    <img src={BgImage} alt="Services" className="w-90 rounded-lg" />
  </div>
</div>


      <SearchBar />
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
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

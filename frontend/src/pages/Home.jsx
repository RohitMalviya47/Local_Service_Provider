import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import video from '../assets/stock.mp4'; // Ensure correct path
import SearchBar from './SearchBar'
import ServiceCard from "./ServiceCard";
import ServicesGrid from "./ServicesGrid"; // Import ServicesGrid

const Home = () => {
  return (
    <div>
      {/* Video Section */}
      <div
        className="home-video-container absolute mt-0"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // Full screen height
          overflow: "hidden",
        }}
      >
        {/* Video element */}
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            objectFit: "cover", // Makes video cover the entire screen
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div
          className="dark-overlay"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            zIndex: "0", // Ensures overlay stays below the content
          }}
        ></div>

        {/* Overlay Content */}
        <div
          className="overlay-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            zIndex: "1", // Ensures content is on top of the video
          }}
        >
          <h1 style={{ fontSize: "64px", fontFamily: "cursive" }}>Welcome to Local Service Providers</h1>
          <p style={{ fontSize: "32px", fontFamily: "cursive" }}>Your trusted partner for all services</p>
        </div>
      </div>
      <SearchBar />

      {/* Services Section */}
      <div className="mt-10">
        <h2 className="text-center text-3xl font-semibold mb-5">Our Services</h2>
        <ServicesGrid /> {/* Display all service cards */}
      </div>

      {/* Search Bar */}
    

      {/* Single Service Card Example (can be used for specific service display) */}
      <div className="mt-10">
        <h3 className="text-center text-2xl font-semibold mb-4">Featured Service</h3>
        <ServiceCard title="Electrician" icon="path/to/icon" />
      </div>
    </div>
  );
};

export default Home;

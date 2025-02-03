import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import video from '../assets/stock.mp4';


const Hero = () => {
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
      </div>

    )
};
  export default Hero;
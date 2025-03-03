import React from "react";
import video from '../../assets/stock.mp4';

const Hero = () => {
  return (
    <div className="relative w-full h-full md:h-[70vh] lg:h-[60vh] flex justify-center items-center overflow-hidden mt-6"> 
      {/* Video Wrapper */}
      <div className="relative w-full md:w-[100%] overflow-hidden flex justify-center items-center 
        lg:w-full lg:h-full min-[1288px]:w-screen min-[1288px]:h-screen">
        
        {/* Video Section */}
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover min-[1288px]:w-screen min-[1288px]:h-screen lg:h-full sm:h-[80vh]"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay (Only on Video) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-cursive">Welcome to Local Service Providers</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-cursive md:h-[20vh]">Your trusted partner for all services</p>
      </div>
    </div>
  );
};

export default Hero;
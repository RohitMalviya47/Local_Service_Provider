import React from "react";
import SearchBar from "./SearchBar";
import ServicesGrid from "../components/ServicesGrid"; 
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <ServicesGrid/>
      </div>
   
  );
};

export default Home;

import React from "react";
import SearchBar from "./SearchBar";
import ServicesGrid from "../components/ServicesGrid"; 
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero />
      <SearchBar />
      <ServicesGrid/>
      <Footer></Footer>
      </div>
   
  );
};

export default Home;

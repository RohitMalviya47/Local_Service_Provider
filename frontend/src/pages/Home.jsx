import React from "react";
import SearchBar from "../components/Common/SearchBar";
import ServicesGrid from "../components/Common/ServicesGrid"; 
import Hero from "../components/Common/Hero";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

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

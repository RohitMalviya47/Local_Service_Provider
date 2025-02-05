import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); 
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-10 top-0 transition-all ease-in-out ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      style={{ transition: "background-color 0.3s ease-in-out" }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">MyWebsite</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold justify-center w-full">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Link to="/" className="text-lg text-gray-700 hover:bg-gray-100 py-2">Home</Link>
            <Link to="/services" className="text-lg text-gray-700 hover:bg-gray-100 py-2">Services</Link>
            <Link to="/about" className="text-lg text-gray-700 hover:bg-gray-100 py-2">About</Link>
            <Link to="/contact" className="text-lg text-gray-700 hover:bg-gray-100 py-2">Contact</Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

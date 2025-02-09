import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInbox, FaCog, FaUser, FaBell } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import img from '../../assets/service_logo_transparent-removebg-preview.png'
const menuItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Service", icon: <FaInbox />, path: "/services" },
  { name: "Notification", icon: <FaBell />, path: "/notification" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
  { name: "Settings", icon: <FaCog />, path: "/setting" },
  { name: "Login", icon: <FaCog />, path: "/login" },

];

const Header = () => {
  const location = useLocation(); // Current page ka path check karne ke liye
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Agar Home page hai to transparency allow karo, baaki sab pe black rahega
  const isHomePage = location.pathname === "/";
  const headerBgClass = isHomePage && !isScrolled ? "bg-transparent" : "bg-gray-900";

  return (
    <header className={`fixed w-full text-white font-bold z-10 top-0 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto  flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="p-0"><img src={img} width={100} alt="" /></div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center space-x-2 hover:text-gray-300 text-white no-underline"
            >
              {item.icon} <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <HiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-transform transform md:hidden w-64 p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <HiX className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col !no-underline space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-3 text-lg hover:text-gray-300  !no-underline text-white"
                onClick={() => setIsSidebarOpen(false)} // Sidebar close hoga jab kisi link pe click karenge
              >
                {item.icon} <span className=" !no-underline">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

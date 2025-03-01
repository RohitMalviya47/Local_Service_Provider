import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInbox, FaCog, FaUser, FaBell } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import img from "../../assets/service_logo_transparent-removebg-preview.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userType, setUserType] = useState(localStorage.getItem("userType"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColorClass = isScrolled ? "text-white" : "text-white";
  const translateClass = isScrolled ? "-translate-y-full" : "translate-y-0";

  // 🔥 Navigation Menu Based on User Type
  const menuItems = userType === "provider"
    ? [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Jobs", icon: <FaInbox />, path: " /jobs" },
        { name: "Notifications", icon: <FaBell />, path: "/notification" },
        { name: "Profile", icon: <FaUser />, path: "/profile" },
        { name: "Settings", icon: <FaCog />, path: "/setting" },
      ]
    : [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Services", icon: <FaInbox />, path: "/services" },
        { name: "Notifications", icon: <FaBell />, path: "/notification" },
        { name: "Profile", icon: <FaUser />, path: "/profile" },
        { name: "Settings", icon: <FaCog />, path: "/setting" },
      ];

  return (
    <header className={`fixed w-full hidden md:block font-bold z-10 top-0 transition-transform duration-300 ${translateClass}`}>
      <div className="container mx-auto flex justify-between items-center px-6 rounded-lg">
        {/* Logo */}
        <div><img src={img} width={100} alt="Logo" className="rounded-full" /></div>

        {/* Desktop Menu */}
        <nav className={`hidden md:flex space-x-6 text-lg ${textColorClass}`}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-2 hover:text-gray-500  rounded-md p-2 ${textColorClass}`}
              style={{textDecoration:'none'}}
            >
              {item.icon} <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <HiMenu className={`w-8 h-8 ${textColorClass}`} />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-transform transform md:hidden w-64 p-6 flex flex-col h-full rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <HiX className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-3 text-lg decoration-0 hover:text-gray-500 rounded-md p-2"
                onClick={() => setIsSidebarOpen(false)}
                style={{textDecoration:'none'}}
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

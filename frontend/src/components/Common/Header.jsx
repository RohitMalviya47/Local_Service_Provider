import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInbox, FaCog, FaUser, FaBell } from "react-icons/fa";
import img from "../../assets/service_logo_transparent-removebg-preview.png";

const Header = () => {
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 🔥 Navigation Menu Based on User Type
  const menuItems = userType === "provider"
    ? [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Jobs", icon: <FaInbox />, path: "./jobs" },
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
    <div className="grid grid-cols-1 pb-16">
      {/* ✅ Desktop & Tablet Navbar */}
      <header
        className={`fixed w-full pb-1 font-bold hidden md:flex z-10 transition-transform duration-300 shadow-lg bg-gray-600 text-white ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 rounded-lg">
          {/* ✅ Logo */}
          <div className="block">
            <img
              src={img}
              width={60}
              alt="Logo"
              className="rounded-full bg-blue-800"
            />
          </div>

          {/* ✅ Navigation Menu - Centered */}
          <nav className="hidden lg:flex space-x-6 text-lg md:flex mx-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
                style={{ textDecoration: "none" }}
              >
                {React.cloneElement(item.icon, { className: "h-6 w-6 text-white" })} 
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Bottom Navigation */}
      <div className={`fixed bottom-0 w-full bg-gray-100 backdrop-blur-lg shadow-md flex justify-evenly py-2 z-50 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="flex flex-col items-center text-gray-900 text-xs" 
            style={{ textDecoration: "none" }}
          >
            {React.cloneElement(item.icon, { className: "h-6 w-6 text-red-900 " })}
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

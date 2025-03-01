import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInbox, FaCog, FaUser, FaBell } from "react-icons/fa";
import img from "../../assets/service_logo_transparent-removebg-preview.png";

const Header = () => {
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

  const translateClass = isScrolled ? "-translate-y-full" : "translate-y-0";

  // 🔥 Navigation Menu Based on User Type
  const menuItems = userType === "provider"
    ? [
        { name: "Home", icon: <FaHome className="h-8 w-8 text-red-900" />, path: "/" },
        { name: "Jobs", icon: <FaInbox className="h-8 w-8 text-red-900" />, path: "/jobs" },
        { name: "Notifications", icon: <FaBell className="h-8 w-8 text-red-900" />, path: "/notification" },
        { name: "Profile", icon: <FaUser className="h-8 w-8 text-red-900" />, path: "/profile" },
        { name: "Settings", icon: <FaCog className="h-8 w-8 text-red-900" />, path: "/setting" },
      ]
    : [
        { name: "Home" , icon: <FaHome className="h-8 w-8 text-red-900" />, path: "/" },
        { name: "Services", icon: <FaInbox className="h-8 w-8 text-red-900" />, path: "/services" },
        { name: "Notifications", icon: <FaBell className="h-8 w-8 text-red-900" />, path: "/notification" },
        { name: "Profile", icon: <FaUser className="h-8 w-8 text-red-900" />, path: "/profile" },
        { name: "Settings", icon: <FaCog className="h-8 w-8 text-red-900" />, path: "/setting" },
      ];

  return (
    <div className="grid grid-cols-1 pb-16">
      {/* ✅ Desktop & Tablet Navbar (Visible Above 600px) */}
      <header className={`fixed w-full font-bold hidden md:flex z-10 transition-transform duration-300 ${translateClass} py-0.5 `}>
        <div className="container mx-auto flex justify-between items-center px-6 rounded-lg">
          {/* ✅ Logo: Always visible above 769px */}
          <div className="block">
            <img src={img} width={60} alt="Logo" className="rounded-full bg-red-800"  />
          </div>
          
          {/* ✅ Navigation Menu */}
          <nav className="hidden lg:flex space-x-6 text-lg text-white md:flex"> {/* ✅ Show menu above 769px */}
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-2 hover:text-gray-500 rounded-md p-2"
                style={{ textDecoration: "none" }}
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Bottom Navigation (Optimized for smaller screens) */}
      <div className="fixed bottom-0 w-full bg-gray-100 backdrop-blur-lg shadow-md flex justify-evenly py-2 z-50 md:hidden">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="flex flex-col items-center text-gray-900">
            {React.cloneElement(item.icon, { className: "h-6 w-6 text-red-900" })}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

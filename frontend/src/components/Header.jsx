import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInbox, FaCog, FaUser, FaBell, FaHistory, FaTools } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Inbox", icon: <FaInbox />, path: "/inbox" },
  { name: "Ongoing Services", icon: <MdMiscellaneousServices />, path: "/ongoing-services" },
  { name: "Service History", icon: <FaHistory />, path: "/service-history" },
  { name: "Notification", icon: <FaBell />, path: "/notifications" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 text-white shadow-md z-10 top-0">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="flex items-center space-x-2 hover:text-gray-300 no-underline text-white">
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

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-64 p-6 flex flex-col h-full`}
      >
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
              className="flex items-center space-x-3 text-lg hover:text-gray-300 no-underline text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.icon} <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-6 hidden md:block">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Project Info and Links */}
        <div className="flex flex-wrap justify-between mb-3">
          {/* Left Section: Project Name and Description */}
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">MyProject</h2>
            <p className="mt-2 text-sm text-gray-400">
              A reliable platform to find local service providers for any home needs.
            </p>
          </div>

          {/* Right Section: Nav Links */}
           
        </div>

        {/* Subscription Section */}
        <div className="mt-3 flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
            {/* <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3> */}
            <p className="text-sm text-gray-400">
              Stay updated with our latest services and offers. Enter your email below!
            </p>
          </div>
          <div className="w-full sm:w-1/3">
            <form onSubmit={handleSubscription} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-3/4 text-gray-800 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Social Media Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400 text-xs">
          <p>&copy; 2025 MyProject. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

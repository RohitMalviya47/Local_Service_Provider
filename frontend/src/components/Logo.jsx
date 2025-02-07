import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from '../assets/service_logo_transparent-removebg-preview.png'

export default function Logo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.img
        src= {img} // Apna logo yaha replace karein
        alt="Logo"
        className="w-70 h-70"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      />
    </div>
  );
}
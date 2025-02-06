import React, { useState } from "react";
import  Button from "./Button.jsx";  // Tailwind UI button example
import frontImage from "../assets/frontImage2.jpeg";
import frontImage1 from "../assets/frontImage3.jpeg";

const OnboardingScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const screens = [
    {
      title: "Find Trusted Experts",
      description: "Connect with trained professionals for your service needs.",
      image: frontImage1
    },
    {
      title: "Easy Booking",
      description: "Schedule your services with just a few clicks.",
      image: frontImage
    },
    {
      title: "Secure Payments",
      description: "Make hassle-free and secure payments online.",
      image: frontImage1
    },
  ];

  const nextStep = () => {
    if (step < screens.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <img src={screens[step].image} alt="Onboarding" className="w-40 h-40 mb-4" />
      <h2 className="text-xl font-bold mb-2">{screens[step].title}</h2>
      <p className="text-gray-600 mb-6 text-center">{screens[step].description}</p>
      <Button onClick={nextStep} className="bg-purple-600 text-white px-6 py-2 rounded-lg">
        {step < screens.length - 1 ? "Next" : "Get Started"}
      </Button>
  
    </div>
  );
};

export default OnboardingScreen;

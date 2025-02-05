import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import frontimage from "../assets/frontImage2.jpeg";
import frontimage1 from "../assets/frontImage3.jpeg";

const slides = [
  {
    image: frontimage,
    title: "Find Trusted Experts",
    description: "Easily connect with trusted professionals for your services.",
  },
  {
    image: frontimage1,
    title: "Easy Booking",
    description: "Book your services with just a few taps.",
  },
  {
    image: frontimage,
    title: "Secure Payments",
    description: "Ensure safe and hassle-free transactions.",
  },
];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // 🛠 Check if onboarding is already completed
  useEffect(() => {
    if (localStorage.getItem("onboardingDone")) {
      navigate("/home"); // Already done, directly go to home
    }
  }, [navigate]);

  const completeOnboarding = () => {
    localStorage.setItem("onboardingDone", "true"); // ✅ Save completion
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="w-64 h-64 rounded-full mb-6"
      />
      <h2 className="text-xl font-bold mb-2">{slides[currentIndex].title}</h2>
      <p className="text-gray-600 text-center mb-4">
        {slides[currentIndex].description}
      </p>

      <button
        onClick={() => {
          if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            completeOnboarding(); // ✅ Last slide pe home chala jaaye
          }
        }}
        className="bg-blue-500 text-white px-6 py-2 rounded-full"
      >
        {currentIndex === slides.length - 1 ? "Finish" : "Next"}
      </button>

      <button
        onClick={completeOnboarding} // ✅ Skip bhi onboarding complete karega
        className="mt-4 text-gray-500 underline"
      >
        Skip
      </button>
    </div>
  );
};

export default Onboarding;

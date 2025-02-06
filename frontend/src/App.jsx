import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ForgotPassword from "./components/ForgetPassword";
import OnboardingScreen from "./components/OnboardingScreen";  // Add this import

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const onboardingComplete = localStorage.getItem("onboardingComplete");
    if (!onboardingComplete) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("onboardingComplete", "true");
    setShowOnboarding(false);
  };

  return (
    <div className="bg-gray-300">
      {showOnboarding ? (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      ) : (
        <Router>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/service/:serviceName" element={<ServiceDetail />} />
          </Routes>
         
        </Router>
      )}
    </div>
  );
}

export default App;

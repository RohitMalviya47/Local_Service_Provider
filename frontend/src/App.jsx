import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login"
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ForgotPassword from "./components/ForgetPassword";
import OnboardingScreen from "./components/OnboardingScreen";
import Setting from "./pages/Setting";
import Logo from "./components/Logo";


function App() {
  const [currentPage, setCurrentPage] = useState("logo");
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Logo 3 sec tak dikhana hai, uske baad direct home page pe le jana hai
    const timer = setTimeout(() => {
      setCurrentPage("home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Onboarding screen check karna
    const onboardingComplete = localStorage.getItem("onboardingComplete");
    if (!onboardingComplete) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("onboardingComplete", "true");
    setShowOnboarding(false);
  };

  if (currentPage === "logo") {
    return <Logo />;
  }

  return (
    <div className="bg-gray-300">
      {showOnboarding ? (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/service/:serviceName" element={<ServiceDetail />} />
             <Route path="/login" element={<Login/>}/>
            <Route path="/setting" element={<Setting />} />
          </Routes>
         
        </Router>
      )}
    </div>
  );
}

export default App;

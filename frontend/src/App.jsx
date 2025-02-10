import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Common/Login";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Notification from "./components/Common/Notification";
import Footer from "./components/Common/Footer";
import ServiceDetail from "./components/Common/ServiceDetail";
import ForgotPassword from "./components/Common/ForgetPassword";
import Setting from "./components/Common/Setting";
import Logo from "./components/Common/Logo";
import UserTypeSelection from "./components/Common/UserTypeSelection";

function App() {
  const [currentPage, setCurrentPage] = useState("logo");

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setCurrentPage("userType");
    }, 3000);

    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <Router>
      <div className="bg-gray-300">
        {currentPage === "logo" ? (
          <Logo />
        ) : currentPage === "userType" ? (
          <UserTypeSelection onUserSelect={() => setCurrentPage("home")} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/service/:serviceName" element={<ServiceDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

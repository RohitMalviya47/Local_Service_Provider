import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ForgotPassword from "./components/ForgetPassword";
import Onboarding from "./pages/Onboarding"; // ✅ Import Onboarding

function App() {
  return (
    <div className="bg-gray-300">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Onboarding />} />  {/* ✅ Default Page Onboarding */}
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/service/:serviceName" element={<ServiceDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

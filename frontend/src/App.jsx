import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header"
import ServiceDetail from "./pages/ServiceDetail";
import ForgotPassword from "./components/ForgetPassword";


function App() {
  return (
    <div className="bg-gray-300">
      <Router>
        <Header/>
        <Routes>
       {/* ✅ Default Page Onboarding */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/service/:serviceName" element={<ServiceDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

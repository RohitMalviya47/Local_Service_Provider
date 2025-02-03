import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesGrid from "./components/ServicesGrid";
import ServiceDetail from "./pages/ServiceDetail"; // Import ServiceDetail

function App() {
  return (
    <div className="bg-gray-300">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service/:serviceName" element={<ServiceDetail />} /> {/* NEW ROUTE ADDED */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

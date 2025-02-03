import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import ForgotPassword from './components/ForgetPassword';
import Footer from "./components/Footer";
import SearchBar from "./pages/SearchBar";
import ServicesGrid from "./pages/ServicesGrid" // Import ServicesGrid

function App() {
  return (
    <div className="bg-gray-300">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesGrid />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
 
        <Footer />
      </Router>
    </div>
  );
}

export default App;

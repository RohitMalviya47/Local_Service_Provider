import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ForgotPassword from "./components/ForgetPassword";
import Setting from "./pages/Setting";
import Logo from "./components/Logo";
import UserTypeSelection from "./components/UserTypeSelection";

function App() {
  const [currentPage, setCurrentPage] = useState("logo");

  useEffect(() => {
    // 🔹 Pehle Logo 3 sec dikhayenge
    const logoTimer = setTimeout(() => {
      setCurrentPage("userType");
    }, 3000);

    return () => clearTimeout(logoTimer);
  }, []);

  if (currentPage === "logo") {
    return <Logo />;
  }

  if (currentPage === "userType") {
    return <UserTypeWrapper onUserSelect={() => setCurrentPage("home")} />;
  }

  return (
    <div className="bg-gray-300">
      <Router>
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
      </Router>
    </div>
  );
}

// ✅ Ye Wrapper UserTypeSection ko Router ke andar rakh raha hai
function UserTypeWrapper({ onUserSelect }) {
  return (
    <Router>
      <UserTypeSelection onUserSelect={onUserSelect} />
    </Router>
  );
}

export default App;

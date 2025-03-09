import React, { useState } from "react";
import "../ExternalCSS/Navbar.css"; // Import external CSS
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="/logo-m.png" alt="PayVang Logo" className="logo-img" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobile ? "mobile-menu" : ""}`} onClick={() => setIsMobile(false)}>
        <li><Link to="/" className={location.pathname === "/" ? "common active" : "common"}>Home</Link></li>
        <li><Link to="/utility" className={location.pathname === "/utility" ? "common active" : "common"}>Utility Bills</Link></li>
        <li><Link to="/school" className={location.pathname === "/school" ? "common active" : "common"}>School Fee</Link></li>
        <li><Link to="/parking" className={location.pathname === "/parking" ? "common active" : "common"}>Parking Payment</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "common active" : "common"}>Contact Us</Link></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button
          className={`login-btn ${location.pathname === "/login" ? "active-btn" : ""}`}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className={`signup-btn ${location.pathname === "/signup" ? "active-btn" : ""}`}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

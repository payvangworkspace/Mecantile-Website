import React, { useState } from "react";
import "../ExternalCSS/Navbar.css"; // Import external CSS
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <li><a href="#">Home</a></li>
        <li><a href="#">Utility Bills</a></li>
        <li><a href="#">School Fee</a></li>
        <li><a href="#">Parking Payment</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

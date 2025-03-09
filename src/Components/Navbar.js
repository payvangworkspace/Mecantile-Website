import React, { useState } from "react";
import "../ExternalCSS/Navbar.css"; // Import external CSS
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate=useNavigate();


  const loginRedirect=()=>{
    navigate("/login")
  }
  const signupRedirect=()=>{
    navigate("/signup")
  }

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/utility">Utility Bills</Link></li>
        <li><Link to="/school">School Fee</Link></li>
        <li><Link to="/parking">Parking Payment</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button className="login-btn" onClick={loginRedirect}>Login</button>
        <button className="signup-btn" onClick={signupRedirect}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

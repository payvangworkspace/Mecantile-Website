import React from "react";
import "../ExternalCSS/LoginForm.css";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Replace with your actual logo path

const LoginForm = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* Logo Section */}
        <div className="auth-logo">
          <img src={"/logo-m.png"} alt="Company Logo" />
        </div>

        <form>
          <div className="auth-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="auth-link">Forgot Password?</a>
          </div>

          <button type="submit" className="auth-button">Log In</button>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

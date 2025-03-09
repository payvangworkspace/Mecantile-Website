import React, { useState } from "react";
import "../ExternalCSS/Signup.css";
// import logo from "../assets/logo.png"; // Ensure the correct path to your logo

const Signup = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    // Add form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Logo Section */}
        <div className="signup-logo">
          <img src={"/logo-m.png"} alt="Company Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="signup-field">
            <label htmlFor="signup-username">Username</label>
            <input type="text" id="signup-username" placeholder="Enter your username" required />
          </div>

          {/* Email Field */}
          <div className="signup-field">
            <label htmlFor="signup-email">Email</label>
            <input type="email" id="signup-email" placeholder="Enter your email" required />
          </div>

          {/* Password Field */}
          <div className="signup-field">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Enter your password" required />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="signup-terms">
            <input
              type="checkbox"
              id="signup-terms"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label htmlFor="signup-terms">
              I accept the <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>

          <p className="signup-footer">
            Already have an account? <a href="#" className="signup-link">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

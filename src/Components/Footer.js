import React from "react";
import "../ExternalCSS/Footer.css"; // External CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Payment Security Section */}
        <div className="footer-section">
          <h3>Payment Secured By</h3>
          <div className="security-logos">
            <img src="logo_SSL.png" alt="SSL Secure" />
            <img src="logo_nortan.png" alt="Norton Secure" />
          </div>
          <p className="company-name">V.VANG SOLUTIONS PRIVATE LIMITED</p>
          <p>Registration Number: 159588</p>
          <p>GST: 07AACCC9997R2ZG</p>
          <p>CIN/LLPIN/FCRN: U67100DL2007PTC159588</p>
          <p>LEI Code: 984500F8612B2AAF9F02</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Grievance Redressal</a></li>
          </ul>
        </div>

        {/* Product By Section */}
        <div className="footer-section">
          <h3>Product By</h3>
          <img src="logo-m.png" alt="PayVang" className="payvang-logo" />
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Email: <a href="mailto:info@payvangservices.com">info@payvangservices.com</a></p>
          <p>Phone: (+91) 011-451289901 / 02</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© Copyrights 2023 <span className="highlight">MercantilePay Services</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

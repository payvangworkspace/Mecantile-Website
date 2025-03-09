import React from "react";
import "../ExternalCSS/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <h3>Company</h3>
          <p className="company-name">V.VANG SOLUTIONS PRIVATE LIMITED</p>
          <p>Registration No: 159588</p>
          <p>GST: 07AACCC9997R2ZG</p>
          <p>CIN/LLPIN/FCRN: U67100DL2007PTC159588</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@payvangservices.com">info@payvangservices.com</a></p>
          <p>Phone: (+91) 011-451289901 / 02</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Security Logos */}
        <div className="footer-section">
          <h3>Secure Payments</h3>
          <div className="security-logos">
            <img src="logo_SSL.png" alt="SSL Secure" />
            <img src="logo_nortan.png" alt="Norton Secure" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span className="highlight">MercantilePay Services</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

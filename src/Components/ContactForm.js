import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../ExternalCSS/ContactForm.css"; // Import external CSS

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="underline"></div>
        <div className="contact-info">
          <p className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+592 608 2581</span>
          </p>
          <p className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@mercantilepay.com">info@mercantilepay.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

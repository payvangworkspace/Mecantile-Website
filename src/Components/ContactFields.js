import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import "../ExternalCSS/ContactFields.css"; // Import external CSS

const ContactFields = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="cf-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="cf-wrapper"
      >
        <h2 className="cf-title">Get in Touch</h2>
        <form>
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "Your Email", name: "email", type: "email" },
            { label: "Your Phone", name: "phone", type: "tel" },
            { label: "Subject", name: "subject", type: "text" },
          ].map(({ label, name, type }) => (
            <motion.div key={name} className="cf-group" whileFocus={{ scale: 1.02 }}>
              <label className="cf-label">{label} *</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="cf-input"
                required
              />
            </motion.div>
          ))}
          <motion.div className="cf-group" whileFocus={{ scale: 1.02 }}>
            <label className="cf-label">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="cf-textarea"
              required
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cf-button"
          >
            <FaPaperPlane size={16} /> Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactFields;

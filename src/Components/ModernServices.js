import React from "react";
import { motion } from "framer-motion";
import "../ExternalCSS/ModernServices.css";
import { FaBolt, FaUniversity, FaCarAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaBolt />,
    title: "Utility Payments",
    description: "Experience a simpler way to pay bills online securely.",
    color: "#FF6B5A",
  },
  {
    icon: <FaUniversity />,
    title: "School Payments",
    description: "Easily pay fees for schools, colleges, and tuition online.",
    color: "#FFC107",
  },
  {
    icon: <FaCarAlt />,
    title: "Car Parking Payment",
    description: "Pay parking fees seamlessly with our cashless service.",
    color: "#00BCD4",
  },
];

const ModernServices = () => {
  return (
    <section className="modern-services">
      <h2 className="section-title">
        Our <span>Services</span>
      </h2>
      <p className="section-subtitle">
        A trusted and convenient way to manage your payments.
      </p>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ModernServices;

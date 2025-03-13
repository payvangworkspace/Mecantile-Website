import React from "react";
import { motion } from "framer-motion";
import "../ExternalCSS/ModernServices.css";
import { FaBolt, FaUniversity, FaCarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <FaBolt />,
    title: "Utility Payments",
    description: "Experience a simpler way to pay bills online securely.",
    color: "#FF6B5A",
    link:"/utility"

  },
  {
    icon: <FaUniversity />,
    title: "School Payments",
    description: "Easily pay fees for schools, colleges, and tuition online.",
    color: "#FFC107",
    link:"/school"
  },
  {
    icon: <FaCarAlt />,
    title: "Car Parking Payment",
    description: "Pay parking fees seamlessly with our cashless service.",
    color: "#00BCD4",
    link:"/parking"
  },
];

const ModernServices = () => {
  const navigate=useNavigate();

  const callGridCard=(link)=>{
    console.log(link)
    navigate(link)


  }




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
            whileHover={{ scale: 1.05 }} onClick={()=>{callGridCard(service.link)}} style={{cursor:"pointer"}}
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

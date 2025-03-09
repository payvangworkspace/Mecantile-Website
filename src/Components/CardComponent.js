import React from "react";
import { motion } from "framer-motion";
import "../ExternalCSS/CardComponent.css";

const CardComponent = ({ icon, name }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="icon">{icon}</div>
      <p className="card-title">{name}</p>
    </motion.div>
  );
};

export default CardComponent;

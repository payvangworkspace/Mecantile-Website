import React from "react";
import { motion } from "framer-motion";
import "../ExternalCSS/PaymentOptions.css";
import { FaDesktop, FaCommentDots, FaMobileAlt, FaWallet } from "react-icons/fa";

const paymentMethods = [
  { icon: <FaDesktop />, title: "Website", color: "#FF6B5A" },
  { icon: <FaCommentDots />, title: "Email/ SMS", color: "#FFC107" },
  { icon: <FaMobileAlt />, title: "Mobile App", color: "#00BCD4" },
  { icon: <FaWallet />, title: "Wallet", color: "#E91E63" },
];

const PaymentOptions = () => {
  return (
    <section className="payment-options">

      {paymentMethods.map((method, index) => (
        <motion.div
          key={index}
          className="option-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="icon" style={{ color: method.color }}>
            {method.icon}
          </div>
          <p className="pay-text">Pay Through</p>
          <h3 className="title">{method.title}</h3>
        </motion.div>
      ))}
    </section>
  );
};

export default PaymentOptions;

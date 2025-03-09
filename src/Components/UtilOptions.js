import { Bolt, Stethoscope, Fuel, Tv, Droplets, Wifi, Smartphone, Home } from "lucide-react";
import CardComponent from "./CardComponent";
import "../ExternalCSS/UtilOptions.css";
import { motion } from "framer-motion";

const services = [
  { name: "Electricity", icon: <Bolt size={30} /> },
  { name: "Medical Bills", icon: <Stethoscope size={30} /> },
  { name: "Petrol/Diesel", icon: <Fuel size={30} /> },
  { name: "Cable", icon: <Tv size={30} /> },
  { name: "Water Bills", icon: <Droplets size={30} /> },
  { name: "Broadband", icon: <Wifi size={30} /> },
  { name: "Mobile Recharge", icon: <Smartphone size={30} /> },
  { name: "Rent Payments", icon: <Home size={30} /> },
];

const UtilOptions = () => {
  return (
    <motion.div 
      className="payment-options-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="title">Utility Payment Solutions</h2>
      <p className="subtitle">
        Experience a smarter way to pay bills using{" "}
        <span className="highlight-text">Mercantile Pay Services.</span>
      </p>
      <motion.div 
        className="options-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CardComponent icon={service.icon} name={service.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UtilOptions;

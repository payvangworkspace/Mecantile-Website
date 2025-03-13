import { motion } from "framer-motion";
import { useState } from "react";
import "../ExternalCSS/PayBill.css"; // External CSS

const PayBill = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="container">
      {/* Header Section */}
      <motion.h2 className="title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Secure Fee Payment
      </motion.h2>
      <motion.p className="subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        Pay fees for schools, colleges & tuition centers with ease
      </motion.p>

      {/* Main Content */}
      <div className="content-box">
        {/* Left Section - Alphabet Filter */}
        <div className="left-section">
          <h3 className="section-title">Select Institute</h3>
          <div className="alphabet-grid">
            {letters.map((letter) => (
              <motion.button
                key={letter}
                className={`alphabet-button ${selectedLetter === letter ? "selected" : ""}`}
                onClick={() => setSelectedLetter(letter)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {letter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Section - Payment Form */}
        <div className="right-section">
          <h3 className="section-title">Payment Details</h3>
          <select className="input-field">
            <option value="">Select Institute</option>
            <option>Aakash Institute</option>
            <option>Allen Institute</option>
            <option>FIITJEE</option>
          </select>
          <input type="text" className="input-field" placeholder="Admission ID *" />
          <input type="tel" className="input-field" placeholder="Phone Number *" />
          <motion.button className="proceed-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={()=>{alert("To be start soon this functionality.")}}>
            Proceed to Pay
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PayBill;

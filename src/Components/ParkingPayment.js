import React, { useState } from "react";
import { AiOutlineCar, AiOutlineCheckCircle } from "react-icons/ai";
import { FaMoneyBillWave, FaClock, FaMobileAlt } from "react-icons/fa";
import "../ExternalCSS/ParkingPayment.css";

const ParkingPayment = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFetchBill = () => {
    alert("To be Start Soon this functionality.")
  };

  return (
    <div className="smart-parking-container">
      {/* Header */}
      <div className="smart-header">
        <h1><AiOutlineCar /> Smart Parking Payment</h1>
        <p>Pay your parking fees seamlessly with Mercantile Pay</p>
      </div>

      <div className="smart-content">
        {/* Benefits Section */}
        <div className="smart-benefits">
          <h2>Why Use Mercantile Pay?</h2>
          <ul>
            <li><AiOutlineCheckCircle className="icon" /> No need to carry cash for parking.</li>
            <li><FaClock className="icon" /> Avoid waiting in queues.</li>
            <li><FaMoneyBillWave className="icon" /> Automatic payment deductions.</li>
            <li><FaMobileAlt className="icon" /> No need for printed parking receipts.</li>
          </ul>
        </div>

        {/* Payment Form Section */}
        <div className="smart-payment-form">
          <h2>Pay Parking Fee</h2>
          <select className="smart-dropdown">
            <option>Park Center Technopark</option>
            <option>City Mall Parking</option>
            <option>Airport Parking</option>
          </select>

          <input
            type="text"
            placeholder="Enter License Plate"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className="smart-input-field"
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="smart-input-field"
          />

          <button className="smart-fetch-btn" onClick={handleFetchBill}>
            Fetch Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkingPayment;

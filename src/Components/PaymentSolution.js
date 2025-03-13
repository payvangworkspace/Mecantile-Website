import React from "react";
import "../ExternalCSS/PaymentSolution.css"; // Importing external CSS
import { useNavigate } from "react-router-dom";


const PaymentSolution = () => {
  const navigate=useNavigate();
  const callContact=()=>{
  navigate("/contact")
   

  }



  return (
    <section className="payment-section">
      {/* Left Content */}
      <div className="content">
        <h2 className="highlight">Mercantile Payments</h2>
        <h1 className="title">Fast & Secure Payment Solutions</h1>
        <p className="description">
          Empower your business with fast, secure, and innovative payment processing. 
          Whether online, mobile, or in-store, we ensure seamless transactions with cutting-edge security and efficiency.
        </p>
        <button className="cts-button" onClick={callContact}>Get In Touch</button>
      </div>

      {/* Right Image */}
      <div className="image-container">
        <img src={"/hero-1.png"} alt="Payment Processing" />
      </div>
    </section>
  );
};

export default PaymentSolution;

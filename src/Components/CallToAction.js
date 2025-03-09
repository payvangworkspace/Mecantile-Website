import React from "react";
import "../ExternalCSS/CallToAction.css"; // External CSS
import { useNavigate } from "react-router-dom";

const CallToAction = () => {

  const navigate=useNavigate();

  const requestCallBack=()=>{
    navigate("/contact")

  }


  return (
    <section className="cta-container">
      <div className="cta-content">
        <span className="cta-tag">#get in touch</span>
        <h2 className="cta-title">Ready to get started?</h2>
        <p className="cta-text">
          Speak to our specialist at (+91 011-451289901/02)
        </p>
      </div>
      <button className="cta-button" onClick={requestCallBack}>Request Call Back →</button>
    </section>
  );
};

export default CallToAction;

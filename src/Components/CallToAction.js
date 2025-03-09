import React from "react";
import "../ExternalCSS/CallToAction.css"; // External CSS

const CallToAction = () => {
  return (
    <section className="cta-container">
      <div className="cta-content">
        <span className="cta-tag">#get in touch</span>
        <h2 className="cta-title">Ready to get started?</h2>
        <p className="cta-text">
          Speak to our specialist at (+91 011-451289901/02)
        </p>
      </div>
      <button className="cta-button">Request Call Back →</button>
    </section>
  );
};

export default CallToAction;

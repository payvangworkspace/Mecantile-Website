import React, { useState } from "react";
import "../ExternalCSS/PayBillForm.css"; // Import external CSS file

const PayBillForm = () => {
  const [service, setService] = useState("Electricity");
  const [accountId, setAccountId] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="container">
      <div className="pay-bill-box">
        <h2 className="title">Pay Your Bills</h2>

        <select
          className="input-field"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Electricity</option>
          <option>Water</option>
          <option>Gas</option>
          <option>Internet</option>
        </select>

        <input
          type="text"
          placeholder="Account ID *"
          className="input-field"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your Phone *"
          className="input-field"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="proceed-btn" onClick={()=>alert("Working soon.")}>Proceed</button>
      </div>
    </div>
  );
};

export default PayBillForm;

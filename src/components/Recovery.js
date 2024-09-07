import { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Recovery = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleRecover = () => {
    // Logic for recovering password using OTP goes here
    console.log("Recovering with OTP:", otp);
  };

  return (
    <div className="recovery-container" style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "50px", marginTop:"125px" }}>Recovery</h2>
      <p style={{ marginBottom: "10px" }}>Enter OTP to recover password</p>
      <p style={{ marginBottom: "20px" }}>Enter 6 digit OTP sent to your email address</p>
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        placeholder="Enter OTP"
        style={{
          padding: "10px",
          width: "200px",
          marginBottom: "40px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />
      <br />
      <button
        onClick={handleRecover}
        style={{
          padding: "10px 20px",
          backgroundColor: "#762626",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Recover
      </button>
      <div style={{ marginTop: "20px" }}>
        <span>Can't get OTP? </span>
        <Link to="#" style={{ color: "#762626", fontWeight: "bold" }}>
          Resend OTP
        </Link>
      </div>
    </div>
  );
};

export default Recovery;

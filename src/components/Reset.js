import React, { useState } from "react";

const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Logic for resetting password goes here
    console.log("Password has been reset");
  };

  return (
    <div className="reset-container" style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "9vh", marginTop:"17vh" }}>Reset Password</h2>
      <p style={{ marginBottom: "10px" }}>Enter your new password below.</p>
      <input
        type="password"
        value={newPassword}
        onChange={handleNewPasswordChange}
        placeholder="New Password"
        style={{
          padding: "10px",
          width: "200px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />
      <br />
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
        style={{
          padding: "10px",
          width: "200px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />
      <br />
      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          backgroundColor: "#762626",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset Password
      </button>
    </div>
  );
};

export default Reset;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    toast.success("Registration successful! Please login.");
    navigate("/Account");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="signin-container">
      <ToastContainer className="absolute top-2.5 right-2.5" />
      <div className="signin-box">
        <h1 className="signin-title">Signin to your PopX account</h1>
        <p className="signin-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mb-4">
          <label className="signin-label">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signin-input"
          />
        </div>

        <div className="mb-6">
          <label className="signin-label">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`signin-button ${isFormValid ? "enabled" : "disabled"}`}
          disabled={!isFormValid}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;

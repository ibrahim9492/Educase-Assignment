import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css"; // Make sure this path is correct

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate("/Signup")}
          className="welcome-button-primary"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/Signin")}
          className="welcome-button-secondary"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

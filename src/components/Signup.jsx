import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css"; // Import the stylesheet

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    toast.success("Registration successful! Please login.");
    navigate("/Signin");
  };

  const isFormValid =
    form.fullName && form.phone && form.email && form.password && form.isAgency;

  return (
    <>
      <ToastContainer className="absolute top-2.5 right-2.5" />
      <div className="signup-container">
        <div className="signup-box">
          <h1 className="signup-title">Create your PopX account</h1>

          <div className="input-group">
            <label className="input-label">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Company name</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="input-field"
            />
          </div>

          <div className="radio-group">
            <p className="radio-label">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`submit-button ${isFormValid ? "enabled" : "disabled"}`}
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;

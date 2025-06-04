import React from "react";
import { FaCamera } from "react-icons/fa";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-container">
      <div className="account-card">
        <h2 className="account-heading">Account Settings</h2>

        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="profile-image"
            />
            <div className="camera-icon">
              <FaCamera size={12} />
            </div>
          </div>

          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>

        <div className="dashed-divider"></div>
        <div className="dashed-divider spacer"></div>
      </div>
    </div>
  );
};

export default AccountSettings;

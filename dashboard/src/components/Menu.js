import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const phoneFromURL = params.get("phone");

    if (phoneFromURL) {
      localStorage.setItem("userPhone", phoneFromURL);
      setUserPhone(phoneFromURL);
      window.history.replaceState({}, "", "/");
    } else {
      const storedPhone = localStorage.getItem("userPhone");
      if (storedPhone) {
        setUserPhone(storedPhone);
      }
    }

    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleSaveName = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;

    localStorage.setItem("userName", trimmed);
    setUserName(trimmed);
    setIsEditingName(false);
    setNameInput("");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const avatarInitials = userName
    ? userName.slice(0, 2).toUpperCase()
    : userPhone
    ? userPhone.slice(-2)
    : "ZU";

  const displayName = userName
    ? userName
    : userPhone
    ? `+91 ${userPhone}`
    : "USERID";

  const clientId = userPhone ? `SF${userPhone.slice(-6)}` : "SF000000";

  return (
    <div className="menu-container">
   <img
  src="logo.png"
  alt="StockFlow logo"
  style={{ width: "50px" }}
/>
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="profile-wrapper">
          <div className="profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
            <div className="avatar">{avatarInitials}</div>
            <div className="user-text">
              <p className="username">{displayName}</p>
              <p className="subtext">View account ▾</p>
            </div>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <div className="avatar large">{avatarInitials}</div>
                <div>
                  <p className="name">{displayName}</p>
                  <p className="email">user@kite.com</p>
                </div>
              </div>

              <hr />

              <div
                className="dropdown-item"
                onClick={() => {
                  setIsProfileDropdownOpen(false);
                  navigate("/");
                }}
              >
                📊 Dashboard
              </div>

              <div
                className="dropdown-item"
                onClick={() => {
                  setIsProfileDropdownOpen(false);
                  setIsProfileModalOpen(true);
                }}
              >
                👤 Profile
              </div>

              <div
                className="dropdown-item danger"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = process.env.REACT_APP_FRONTEND_URL;
                }}
              >
                🚪 Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {isProfileModalOpen && (
        <div className="modal-overlay" onClick={() => setIsProfileModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>My Profile</h3>

            <div className="avatar large" style={{ marginBottom: "12px" }}>
              {avatarInitials}
            </div>

            <p style={{ fontSize: "0.85rem", color: "#777", marginBottom: "4px" }}>
              Name
            </p>

            {isEditingName ? (
              <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="Enter your name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  autoFocus
                  style={{ marginBottom: 0 }}
                />
                <button className="btn btn-blue" onClick={handleSaveName}>
                  Save
                </button>
              </div>
            ) : (
              <p
                style={{
                  fontSize: "1rem",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {userName || "Not set"}
                <span
                  onClick={() => {
                    setNameInput(userName);
                    setIsEditingName(true);
                  }}
                  style={{ fontSize: "0.75rem", color: "#4184f3", cursor: "pointer" }}
                >
                  {userName ? "Edit" : "Add name"}
                </span>
              </p>
            )}

            <p style={{ fontSize: "0.85rem", color: "#777", marginBottom: "4px" }}>
              Mobile Number
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "12px" }}>
              {userPhone ? `+91 ${userPhone}` : "Not available"}
            </p>

            <p style={{ fontSize: "0.85rem", color: "#777", marginBottom: "4px" }}>
              Client ID
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "16px" }}>{clientId}</p>

            <div className="modal-actions">
              <button className="btn btn-action" onClick={() => setIsProfileModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
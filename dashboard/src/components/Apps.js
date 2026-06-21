import React, { useState } from "react";

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  const appsData = [
    {
      name: "Smallcase",
      desc: "Invest in thematic stock baskets",
      action: "invest",
    },
    {
      name: "Streak",
      desc: "Create trading strategies without coding",
      action: "explore",
    },
    {
      name: "Console",
      desc: "Advanced reports & portfolio tracking",
      action: "view",
    },
    {
      name: "Coin",
      desc: "Mutual fund investments platform",
      action: "open",
    },
  ];

  const handleAction = (app) => {
    if (app.action === "open") {
      alert(`${app.name} is now opening...`);
    }

    if (app.action === "invest") {
      window.open("https://www.smallcase.com", "_blank");
    }

    if (app.action === "explore") {
      setSelectedApp(app);
    }

    if (app.action === "view") {
      alert(`${app.name}: ${app.desc}`);
    }
  };

  return (
    <div className="apps-container">
      <h2 className="apps-title">Apps</h2>

      <div className="apps-grid">
        {appsData.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon">{app.name[0]}</div>

            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.desc}</p>
            </div>

            <button
              className="app-btn"
              onClick={() => handleAction(app)}
            >
              {app.action}
            </button>
          </div>
        ))}
      </div>

      {/* SIMPLE MODAL */}
      {selectedApp && (
        <div className="modal">
          <div className="modal-box">
            <h3>{selectedApp.name}</h3>
            <p>{selectedApp.desc}</p>

            <button onClick={() => setSelectedApp(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
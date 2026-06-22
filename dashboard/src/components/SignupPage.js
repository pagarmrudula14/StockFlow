import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // 👉 Put your actual signup API logic here if you have it

    // For now: directly redirect to dashboard
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Signup Page</h1>
      <p>Welcome to StockFlow Signup</p>

      {/* Signup button */}
      <button
        onClick={handleSignup}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default SignupPage;
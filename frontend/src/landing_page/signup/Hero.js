import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [touched, setTouched] = useState(false);

  const isValidPhone = /^[6-9]\d{9}$/.test(phone);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
  };

  const handleGetOtp = async () => {
    setTouched(true);
    if (!isValidPhone) return;

    try {
      const response = await fetch("http://localhost:3002/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      console.log("Response Status:", response.status);

      setOtpSent(true);
      setTimer(30);

      alert("OTP generated successfully.");
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:3002/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();
if (data.success) {
  setVerified(true);

  alert("OTP Verified Successfully");

  localStorage.setItem("userPhone", phone);

  console.log("NAVIGATING TO HOME");

 window.location.href = `http://localhost:3001?phone=${phone}`;
}
       else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      alert("Verification failed");
    }
  };

  const showError = touched && !isValidPhone && phone.length > 0;

  return (
    <div className="container signup-hero">
      <div className="text-center">
        <h1 className="display-5 fw-bold">
          Open a free demat and trading account online
        </h1>

        <p className="fs-5 text-muted mt-3">
          Start investing brokerage free.
        </p>
      </div>

      <div className="row align-items-center mt-5">
        <div className="col-lg-7 text-center">
          <img
            src="/media/images/signup.svg"
            alt="Signup"
            className="img-fluid hero-image"
          />
        </div>

        <div className="col-lg-5 signup-form d-flex flex-column">
          <h2 className="mb-3 fw-semibold">Signup now</h2>

          <div className={`input-group ${showError ? "border border-danger" : ""}`}>
            <span className="input-group-text">+91</span>

            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile number"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => setTouched(true)}
              maxLength={10}
            />
          </div>

          {showError && (
            <small className="text-danger mt-2">
              Enter valid number
            </small>
          )}

          <button
            className="btn btn-primary w-100 mt-4 py-2"
            onClick={handleGetOtp}
            disabled={timer > 0}
          >
            {timer > 0 ? `Resend OTP in ${timer}s` : "Get OTP"}
          </button>

          {otpSent && !verified && (
            <>
              <input
                className="form-control mt-3"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />

              <button
                className="btn btn-success mt-3"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}

          {verified && (
            <div className="alert alert-success mt-3">
              Verified successfully
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
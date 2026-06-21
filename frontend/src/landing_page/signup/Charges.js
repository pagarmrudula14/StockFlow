import React from "react";

function Charges() {
  return (
    <div className="container mt-5">

      {/* TITLE */}
      <h2 className="text-center fw-bold">
        Why open a StockFlow account?
      </h2>

      <div className="row mt-5 text-center">

        {/* 0 BROKERAGE */}
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="/media/images/charges.svg"
              alt="0 Brokerage"
              style={{ width: "80px", height: "80px" }}
            />

            <h4 className="mt-3">0 Brokerage</h4>
            <p className="text-muted">
              Invest without paying any brokerage fees.
            </p>

          </div>
        </div>

        {/* TRUSTED PLATFORM */}
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="/media/images/benefits.svg"
              alt="Trusted Platform"
              style={{ width: "80px", height: "80px" }}
            />

            <h4 className="mt-3">Trusted Platform</h4>
            <p className="text-muted">
              Safe, secure and reliable investing experience.
            </p>

          </div>
        </div>

        {/* EASY SIGNUP */}
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="/media/images/signup.svg"
              alt="Easy Signup"
              style={{ width: "80px", height: "80px" }}
            />

            <h4 className="mt-3">Easy Account Opening</h4>
            <p className="text-muted">
              Open your account in just a few simple steps.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Charges;
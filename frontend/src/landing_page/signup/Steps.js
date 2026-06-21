import React from "react";

function Steps() {
  return (
    <div className="container mt-5">

      {/* TITLE */}
      <h2 className="text-center fw-bold">
        Steps to open account
      </h2>

      <div className="row mt-5 text-center">

        {/* STEP 1 */}
        <div className="col-md-3 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
              alt="Mobile Number"
              style={{ width: "70px" }}
            />

            <h5 className="mt-3 fw-bold">01</h5>
            <p className="fw-semibold mb-1">Mobile Number</p>
            <p className="text-muted small">
              Enter your mobile number to start.
            </p>

          </div>
        </div>

        {/* STEP 2 */}
        <div className="col-md-3 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="PAN Verification"
              style={{ width: "70px" }}
            />

            <h5 className="mt-3 fw-bold">02</h5>
            <p className="fw-semibold mb-1">PAN Verification</p>
            <p className="text-muted small">
              Complete KYC using PAN details.
            </p>

          </div>
        </div>

        {/* STEP 3 */}
        <div className="col-md-3 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png"
              alt="Bank Details"
              style={{ width: "70px" }}
            />

            <h5 className="mt-3 fw-bold">03</h5>
            <p className="fw-semibold mb-1">Bank Details</p>
            <p className="text-muted small">
              Link your bank account securely.
            </p>

          </div>
        </div>

        {/* STEP 4 */}
        <div className="col-md-3 mb-4">
          <div className="p-4 border rounded h-100">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="E-Sign"
              style={{ width: "70px" }}
            />

            <h5 className="mt-3 fw-bold">04</h5>
            <p className="fw-semibold mb-1">E-Sign</p>
            <p className="text-muted small">
              Complete e-sign to activate account.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Steps;
import React from "react";

function Brokerage() {
  return (
    <div className="container">

      <div className="row p-5 mt-5 border-top">

        {/* LEFT SIDE */}
        <div className="col-md-8 p-4">

          <h3 className="fs-5 fw-bold text-dark">
            Brokerage calculator
          </h3>

          <ul
            className="text-muted mt-4"
            style={{
              textAlign: "left",
              lineHeight: "2",
              fontSize: "14px"
            }}
          >

            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>

            <li className="mb-2">
              Digital contract notes will be sent via e-mail.
            </li>

            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>

            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>

            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>

            <li className="mb-2">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
            </li>

          </ul>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-4 p-4">

          <div
            className="p-4 border rounded text-center h-100"
            style={{ backgroundColor: "#fafafa" }}
          >

            <h3 className="fs-5 fw-bold text-dark">
              List of charges
            </h3>

            <p
              className="text-muted mt-3"
              style={{
                fontSize: "14px",
                lineHeight: "1.8"
              }}
            >
              View complete breakdown of brokerage, taxes, stamp duty, SEBI charges, and other statutory fees applicable on trades.
            </p>

            {/* WORKING DOWNLOAD BUTTON */}
            <a
              href="/media/pdf/charges.pdf"
              download
              className="btn btn-primary mt-3 px-4 py-2"
            >
              Download PDF
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Brokerage;
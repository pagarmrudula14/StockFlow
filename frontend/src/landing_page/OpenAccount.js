import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5">

      <div className="row text-center border-top pt-5">

        {/* TITLE */}
        <h2 className="fw-bold">
          Open a StockFlow account
        </h2>

        {/* SUBTEXT */}
        <p className="text-muted fs-5 mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>

        {/* BUTTON */}
        <div className="mt-3">

          <Link
            to="/signup"
            className="btn btn-primary px-5 py-2"
          >
            Open Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OpenAccount;
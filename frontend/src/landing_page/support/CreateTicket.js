import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* COLUMN 1 */}
        <div className="col-md-4 p-4">

          <h4>
            <i className="fa fa-plus-circle me-2"></i>
            Account Opening
          </h4>

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Online Account Opening
          </Link>
          <br />

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Offline Account Opening
          </Link>
          <br />

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Company, Partnership and HUF Account Opening
          </Link>
          <br />

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            NRI Account Opening
          </Link>
          <br />

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Charges at StockFlow
          </Link>
          <br />

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            StockFlow IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />

          <Link
            to="/support/online-account-opening"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Getting Started
          </Link>

        </div>

        {/* COLUMN 2 */}
        <div className="col-md-4 p-4">

          <h4>
            <i className="fa fa-plus-circle me-2"></i>
            Your StockFlow Account
          </h4>

          <Link
            to="/support/login-credentials"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Login Credentials
          </Link>
          <br />

          <Link
            to="/support/login-credentials"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Account Modification and Segment Addition
          </Link>
          <br />

          <Link
            to="/support/login-credentials"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            DP ID and Bank Details
          </Link>
          <br />

          <Link
            to="/support/login-credentials"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Your Profile
          </Link>
          <br />

          <Link
            to="/support/login-credentials"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Transfer and Conversion of Shares
          </Link>

        </div>

        {/* COLUMN 3 */}
        <div className="col-md-4 p-4">

          <h4>
            <i className="fa fa-plus-circle me-2"></i>
            Trading & Platforms
          </h4>

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Margin/Leverage, Product and Order Types
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Kite Web and Mobile
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Trading FAQs
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Corporate Actions
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Sentinel
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Kite API
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Pi and Other Platforms
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            StockReports+
          </Link>
          <br />

          <Link
            to="/support/trading-faqs"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            GTT
          </Link>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
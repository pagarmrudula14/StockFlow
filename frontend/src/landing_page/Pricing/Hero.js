import React from "react";
import { Link } from "react-router-dom";

function PricingHero() {
  return (
    <div className="container">

      {/* HEADER */}
      <div className="row p-5 mt-5 border-bottom text-center">

        <h1 className="fw-bold">Pricing</h1>

        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>

      </div>

      {/* PRICING CARDS */}
      <div className="row text-center mt-5 align-items-stretch">

        {/* CARD 1 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 h-100">

            <img
              src="/media/images/pricingEquity.svg"
              alt="Free Equity"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain"
              }}
              className="mb-3"
            />

            <h3 className="fs-4 fw-semibold">Free equity delivery</h3>

            <p className="text-muted mt-2">
              All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
            </p>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 h-100">

            <img
              src="/media/images/intradayTrades.svg"
              alt="Intraday Trades"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain"
              }}
              className="mb-3"
            />

            <h3 className="fs-4 fw-semibold">Intraday & F&O trades</h3>

            <p className="text-muted mt-2">
              Flat ₹20 or 0.03% per executed order on intraday, F&O, currency & commodities.
            </p>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 h-100">

            <img
              src="/media/images/pricingequity.svg"
              alt="Mutual Funds"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain"
              }}
              className="mb-3"
            />

            <h3 className="fs-4 fw-semibold">Free direct mutual funds</h3>

            <p className="text-muted mt-2">
              No commission charges on mutual fund investments.
            </p>

          </div>
        </div>

      </div>

     

    </div>
  );
}

export default PricingHero;
import React from "react";

function InvestmentOptions() {
  return (
    <div className="container mt-5">

      <h2 className="text-center fw-bold">
        Investment options with StockFlow account
      </h2>

      <div className="row mt-5">

        {/* STOCKS */}
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded h-100 text-center">

            <img
              src="/media/images/stocks.svg"
              alt="Stocks"
              style={{ width: "70px" }}
            />

            <h4 className="mt-3">Stocks</h4>
            <p className="text-muted">
              Invest in all exchange listed securities.
            </p>

          </div>
        </div>

        {/* MUTUAL FUNDS */}
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded h-100 text-center">

            <img
              src="/media/images/mutualfund.svg"
              alt="Mutual Funds"
              style={{ width: "70px" }}
            />

            <h4 className="mt-3">Mutual Funds</h4>
            <p className="text-muted">
              Invest commission free direct mutual funds.
            </p>

          </div>
        </div>

        {/* IPO */}
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded h-100 text-center">

            <img
              src="/media/images/ipo.svg"
              alt="IPO"
              style={{ width: "70px" }}
            />

            <h4 className="mt-3">IPO</h4>
            <p className="text-muted">
              Apply instantly using UPI.
            </p>

          </div>
        </div>

        {/* F&O */}
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded h-100 text-center">

            <img
              src="/media/images/fo.svg"
              alt="F&O"
              style={{ width: "70px" }}
            />

            <h4 className="mt-3">F&O</h4>
            <p className="text-muted">
              Trade futures and options.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default InvestmentOptions;
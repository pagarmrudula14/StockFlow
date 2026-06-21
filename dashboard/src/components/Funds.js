import React, { useState } from "react";

const Funds = () => {
  const [availableMargin, setAvailableMargin] = useState(4043.10);
  const [availableCash, setAvailableCash] = useState(4043.10);
  const [hasCommodityAccount, setHasCommodityAccount] = useState(false);

  const [modalType, setModalType] = useState(null); // "add" | "withdraw" | null
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setAmount("");
    setError("");
  };

  const closeModal = () => {
    setModalType(null);
    setAmount("");
    setError("");
  };

  const handleConfirm = () => {
    const value = parseFloat(amount);

    if (!value || value <= 0) {
      setError("Enter a valid amount.");
      return;
    }

    if (modalType === "add") {
      setAvailableMargin((prev) => prev + value);
      setAvailableCash((prev) => prev + value);
    } else if (modalType === "withdraw") {
      if (value > availableCash) {
        setError("Withdrawal amount exceeds available cash.");
        return;
      }
      setAvailableMargin((prev) => prev - value);
      setAvailableCash((prev) => prev - value);
    }

    closeModal();
  };

  const formatNumber = (num) =>
    num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers using UPI</p>
        <button className="btn btn-green" onClick={() => openModal("add")}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={() => openModal("withdraw")}>
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col equity-col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{formatNumber(availableMargin)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{formatNumber(availableCash)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>3,736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col commodity-col">
          <span>
            <p>Commodity</p>
          </span>
          {hasCommodityAccount ? (
            <div className="commodity">
              <p>Your commodity account is active.</p>
              <p className="imp colored">0.00</p>
            </div>
          ) : (
            <div className="commodity">
              <p>You don't have a commodity account</p>
              <button
                className="btn btn-blue"
                onClick={() => setHasCommodityAccount(true)}
              >
                Open Account
              </button>
            </div>
          )}
        </div>
      </div>

      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{modalType === "add" ? "Add Funds" : "Withdraw Funds"}</h3>
            <input
              type="number"
              className="modal-input"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              autoFocus
            />
            {error && <p className="modal-error">{error}</p>}
            <div className="modal-actions">
              <button className="btn btn-blue" onClick={handleConfirm}>
                Confirm
              </button>
              <button className="btn btn-action" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;
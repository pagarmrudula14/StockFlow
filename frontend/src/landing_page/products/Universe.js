import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The StockFlow Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/Pivotree.png"style={{
  height: "65px",
  width: "auto",
  maxWidth: "220px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
}} />
          <p className="text-small text-muted"style={{marginTop:"12px"}}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/ALGO.png" style={{
  height: "65px",
  width: "auto",
  maxWidth: "220px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
  transform:"scale(2)",
}} />

  <p className="text-small text-muted"style={{marginTop:"12px"}}>Algo & startegy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/flowcapital.png" style={{
  height: "65px",
  width: "auto",
  maxWidth: "220px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
}} />

          <p className="text-small text-muted"style={{marginTop:"12px"}}>Options trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/stockflowhouse.png" style={{
  height: "65px",
  width: "auto",
  maxWidth: "220px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
}} />
          <p className="text-small text-muted"style={{marginTop:"12px"}}>Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tradeflow-logo.png" style={{
  height: "65px",
  width: "auto",
  maxWidth: "220px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
}} />
          <p className="text-small text-muted"style={{marginTop:"12px"}}>Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5"style={{marginTop:"12px"}}>
          <img src="media/images/orbito.png" style={{
  height: "65px",
  width: "auto",
  maxWidth: "220px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
}}/>
          <p className="text-small text-muted"style={{marginTop:"12px"}}>Portfolio management</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
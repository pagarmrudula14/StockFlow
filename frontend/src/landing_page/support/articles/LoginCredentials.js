import React from "react";

function LoginCredentials() {
  return (
    <div className="container mt-5 p-5">

      <h2 className="fw-bold">Account Management</h2>

      <p className="text-muted">
        Manage your StockFlow account information and settings.
      </p>

      <hr />

      <h4>Login Credentials</h4>
      <p>
        Login details are sent to your registered
        mobile number and email after activation.
      </p>

      <h4>Account Modification</h4>
      <p>
        Update personal details and enable new trading
        segments through profile settings.
      </p>

      <h4>DP ID & Bank Details</h4>
      <p>
        View your demat account number and linked bank
        accounts from the profile section.
      </p>

      <h4>Your Profile</h4>
      <p>
        Manage personal information, security settings
        and nominee details.
      </p>

      <h4>Transfer & Conversion of Shares</h4>
      <p>
        Transfer shares between accounts and convert
        holdings when required.
      </p>

    </div>
  );
}

export default LoginCredentials;
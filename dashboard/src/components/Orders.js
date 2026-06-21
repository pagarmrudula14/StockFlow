import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/allOrders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Orders ({orders.length})</h3>

        <button className="btn btn-primary">
          New Order
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table">

            <thead>
              <tr>
                <th>Stock</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>

                  <td
                    className={
                      order.mode === "BUY"
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {order.mode}
                  </td>

                  <td>{order.qty}</td>

                  <td>₹{order.price}</td>

                  <td>
                    <span
                      className={
                        order.status === "Completed"
                          ? "text-success"
                          : "text-warning"
                      }
                    >
                      {order.status || "Completed"}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
};

export default Orders;
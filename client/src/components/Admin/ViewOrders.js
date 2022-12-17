import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import AdminNavBar from "./AdminNavBar";

const Orders = () => {
  const [orderlist, setorderlist] = useState([]);

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/vieworders");
      const data = await response.json();
      setorderlist(data);
      console.log(orderlist);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const deleteOrder = await fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      });
      setorderlist(orderlist.filter((todo) => todo.todo_id !== id));
      toast.success("Order is Completed!");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, [orderlist]);

  return (
    <div>
      <AdminNavBar />

      {orderlist.map((order) => {
        return (
          <div
            key={order.ord_number}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#FFF",
              width: "50%",
              height: "50%",
              marginLeft: "26%",
              boxShadow: "2px 2px",
              marginTop: "2%",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "10vw",
              }}
              className="container"
            >
              <h1
                style={{
                  fontSize: "3vw",
                  color: "#52ab98",
                  textShadow: "1px 1px black",
                }}
              >
                {order.u_email}
              </h1>
              <h1>
                Orders {order.ord_quantity} {order.pr_name}
              </h1>
              <h1 style={{ fontSize: "1vw" }}>Bill: {order.ord_price}$</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1%",
              }}
            >
              <button
                onClick={() => deleteOrder(order.ord_number)}
                style={{
                  height: "20%",
                  width: "100%",
                  fontSize: "1vw",
                  marginTop: 10,
                }}
                className="btn btn-outline-danger btn-xs"
              >
                Delivered
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;

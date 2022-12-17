import React from "react";

export default function AdminNavBar() {
  const hanldeOrders = () => {
    window.location = "/orders";
  };

  const addProductHanlder = () => {
    window.location = "/addproducts";
  };

  const handleLogout = () => {
    window.location = "/admin";
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "60px",
        backgroundColor: "#a8d96f",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontSize: "30px", fontWeight: "900", color: "#2d9396"}}>
             Smart Bakery
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginLeft: "67%",
        }}
      >
        <button
          style={{
            backgroundColor: "#a56fd9",
            color: "#000",
            border: "2px solid #000",
            padding: 8,
            marginLeft: 5,
            borderRadius: 10,
            marginRight: 5,
          }}
          onClick={hanldeOrders}
        >
          ORDERS
        </button>
        <button
          style={{
            backgroundColor: "#498cb3",
            color: "#FFF",
            borderRadius: "10px",
            border: "2px solid #FFF",
            padding: 8,
          }}
          onClick={addProductHanlder}
        >
          ADD PRODUCT
        </button>
        <button
          style={{
            backgroundColor: "#5b8e3d",
            color: "#000",
            border: "2px solid #000",
            padding: 8,
            marginLeft: 5,
            borderRadius: 10,
          }}
          onClick={handleLogout}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

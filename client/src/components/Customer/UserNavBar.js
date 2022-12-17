import React from "react";

export default function UserNavBar() {
  const handleLogout = () => {
    window.location = "/customerLogin";
  };
  return (
  /*  <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "60px",
        backgroundColor: "#7a3a1e",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#FFF" }}>
        Smart Bakey
      </h3>  --> */


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
          marginLeft: "82%",
        }}
      >
        <button
          style={{
            backgroundColor: "#8e743d",
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

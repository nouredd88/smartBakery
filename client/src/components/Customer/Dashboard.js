import React, { useEffect } from "react";
import { useState } from "react";
import UserNavBar from "./UserNavBar";
import BuyProduct from "./BuyProduct";

const Dashboard = () => {
  const [prodlist, setprodlist] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Products");
      const data = await response.json();
      setprodlist(data);
      console.log(prodlist);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [prodlist]);

  return (
    <div>
      <UserNavBar />
      {prodlist.map((prod) => {
        return (
          <div
            key={prod.pr_code}
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
            <img
              alt=""
              style={{
                marginTop: "1%",
                width: "200px",
                height: "170px",
              }}
              src={prod.pr_image_url}
            />

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
                  fontSize: "2vw",
                  color: "#52ab98",
                  textShadow: "1px 1px black",
                }}
              >
                {prod.pr_name}
              </h1>
              <h1 style={{ fontSize: "1vw", color: "#6B8E23" }}>
                {prod.pr_description}
              </h1>
              <h1 style={{ fontSize: "1vw" }}>Price: {prod.pr_price}$</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1%",
              }}
            >
              <BuyProduct prod={prod} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;

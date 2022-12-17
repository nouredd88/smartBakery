import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import AdminNavBar from "./AdminNavBar";
import Edit from "./EditProduct";

const Products = () => {
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

  const deleteProduct = async (id) => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/products/${id}`,
        {
          method: "DELETE",
        }
      );
      setprodlist(prodlist.filter((todo) => todo.todo_id !== id));
      toast.success("Product is deleted!");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [prodlist]);

  return (
    <div
      syle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <AdminNavBar />
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
              marginTop: "1%",
              borderRadius: 20,
              overflow: "hidden",
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
                marginTop: "1%",
              }}
            >
              <button
                onClick={() => deleteProduct(prod.pr_code)}
                style={{
                  height: "20%",
                  width: "100%",
                  fontSize: "1vw",
                }}
                className="btn btn-outline-danger btn-xs"
              >
                Remove
              </button>
              <Edit prod={prod} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

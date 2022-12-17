import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = ({ prodlist }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        backgroundColor: "#FFF",
      }}
    >
      <Carousel>
        {prodlist.map((prod) => {
          return (
            <div
              style={{ width: "50%", height: "100%", backgroundColor: "#FFF" }}
            >
              <img
                alt=""
                className="img-fluid"
                style={{ width: "50%" }}
                src={prod.product_image_url}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;

import React from "react";
import { Carousel } from "antd";
import "../styles/Carousell.styles.css";

/* const contentStyle: React.CSSProperties = {
  marginTop: "90px",
  color: "#fff",
  textAlign: "center",
}; */

export const Carousell: React.FC = () => (
  <div className="banner-container">
    <Carousel effect="fade">
      <div className="banner-two">
      </div>
      {/* <div className="banner-two">
        <h3>2</h3>
      </div> */}
    </Carousel>
  </div>
);

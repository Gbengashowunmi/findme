import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./popularservice.scss";
export default function PopularCard({ logo, image, vendor, businessInfo, service }) {
  return (
    <div className="product_wrapper">
      <section className="content">
        <img src={logo} alt="" />
        <section className="title">
          <h3>{vendor}</h3>
          <p>{service} </p>
        </section>
        <div className="rating">
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="grey" />
          (1028)
        </div>
        <p>{businessInfo}</p>

        <button> Book</button>
      </section>
      <div className="image">
        <img src={image} alt="side" />
      </div>
    </div>
  );
}

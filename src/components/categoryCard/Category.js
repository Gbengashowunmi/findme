import React from "react";
import "./categorycard.scss";

export default function Category({ image, name }) {


  return (
    <div className="category_card">
      <img src={image} alt="category_icon" />
      <p>{name}</p>
    </div>
  );
}

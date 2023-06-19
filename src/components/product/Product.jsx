import React from "react";
import "./Product.css";
import Counters from '../counters/Counters'

export default function Product(props) {
  return (
    <div className="product-wrapper">
      <img src={props.data.img} alt="img" />
      <p>{props.data.name}</p>
      <Counters/>
    </div>
  );
}
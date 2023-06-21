import React from "react";
import "./Product.css";
import Counters from '../counters/Counters'

export default function Product(props) {
  return (
    <div className="product-wrapper">
      <div className="img">
      <img src={props.data.img} alt="img" />
      </div>
      <div className="p">
      <p>{props.data.name}</p>
      </div>
      <Counters/>
    </div>
  );
}
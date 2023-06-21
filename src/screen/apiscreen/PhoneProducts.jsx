import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PhoneProducts.css";
const link = "https://dummyjson.com/products";

export default function PhoneProducts() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    // changes when limit changes
    axios.get(link + "?limit=" + limit).then((result) => {
      console.log(result);
      setProducts(result.data.products);
    });
  }, [limit]);

  return (
    <>
      <h1>LIMIT : {limit}</h1>
      <button onClick={() => setLimit((prev) => prev + 2)}>+</button>
      <button onClick={() => setLimit((prev) => prev - 2)}>-</button>
      <div className="wrapper-prodcuts">
        {products.map((each) => {
          return (
            <div key={each.id} className="each-product">
              <p>{each.brand}</p>
              <p>{each.title}</p>
              <img src={each.images[0]} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
}

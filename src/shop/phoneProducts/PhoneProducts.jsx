import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PhoneProducts.css";
import { useNavigate, Link } from "react-router-dom";
const link = "https://dummyjson.com/products";

export default function PhoneProducts(props) {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [limit, setLimit] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    //
    axios.get(link + "?limit=" + limit).then((result) => {
      console.log(result);
      setProducts(result.data.products);
    });
  }, [limit]);

  function handleClick(id) {
    if (selectedProducts.includes(id)) {
      //remove
      const updated = selectedProducts.filter((each) => {
        return each != id;
      });
      setSelectedProducts(updated);
    } else {
      setSelectedProducts([...selectedProducts, id]);
      // add
    }
  }
  console.log(selectedProducts, "selected products");
  return (
    <>
      <h1>LIMIT : {limit}</h1>
      <button onClick={() => setLimit((prev) => prev + 2)}>+</button>
      <button onClick={() => setLimit((prev) => prev - 2)}>-</button>
      <h1>In cart:{selectedProducts.length}</h1>
      <div className="wrapper-prodcuts">
        {products.map((each) => {
          return (
            <div key={each.id} className="each-product">
              <button
                onClick={() => {
                  //set id and
                  props.setId(each.id);
                  // go to details page
                  navigate("/phonedetails");
                }}
              >
                More ...
              </button>
              <h1>{each.id}</h1>
              <p>{each.brand}</p>
              <p>{each.title}</p>
              <img src={each.images[0]} alt="img" />
              <button
                onClick={() => {
                  handleClick(each.id);
                }}
                style={{
                  // condtiaonlly chaging color
                  color: selectedProducts.includes(each.id) ? "red" : "blue",
                }}
              >
                {selectedProducts.includes(each.id)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

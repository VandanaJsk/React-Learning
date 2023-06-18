import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Products from "../../components/products/Products";
export default function ItemScreen() {
  const [clicked, setClicked] = useState("flipkart");

  return (
    <div>
      <Navbar
        baharse={"sjfhskjfkjs"}
        major={"no"}
        showDropdown={false}
        setSelecred={setClicked}
        obj={{ name: "mukesh" }}
        selected={clicked}
      />
      <Slider selected={clicked} setSelected={setClicked} />

      <Products selected={clicked} />
    </div>
  );
}

////  slider 
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Products from "../../components/products/Products";
export default function ItemScreen() {
  const [clicked, setClicked] = useState("flipkart");

  return (
    <div>
      <Navbar
        baharse={"sjfhskjfkjs"}
        major={"no"}
        showDropdown={false}
        setSelecred={setClicked}
        obj={{ name: "mukesh" }}
        selected={clicked}
      />
      <Slider selected={clicked} setSelected={setClicked} />

      <Products selected={clicked} />
    </div>
  );
}
// prudcts 
import React, { useState } from "react";
import Product from "../product/Product";

export default function Products(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "laptops1  ",
      img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
    },
    {
      id: 2,
      name: "laptops  2",
      img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
    },
    {
      id: 3,
      name: "laptops 4 ",
      img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
    },
    {
      id: 4,
      name: "laptops  13030",
      img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
    },
  ]);

  const [grocery, setGrocery] = useState([
    {
      id: 1,
      name: "pOtato",
      img: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
    },
    {
      id: 2,
      name: "pOtato",
      img: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
    },
    {
      id: 3,
      name: "pOtato",
      img: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
    },
    {
      id: 4,
      name: "pOtato",
      img: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
    },
  ]);

  return (
    <div>
      Products:
      {props.selected == "flipkart"
        ? products.map((each, index) => {
            return <Product data={each} />;
          })
        : grocery.map((each, index) => {
            return <Product data={each} />;
          })}
    </div>
  );
}
import React from "react";
import "./Product.css";
import Counter from "../counter/Counter";
export default function Product(props) {
  return (
    <div className="product-wrapper">
      <img src={props.data.img} alt="sdjs" />
      <p>{props.data.name}</p>
      <Counter />
    </div>
  );
}

// product ->>>>>>>>>>>>
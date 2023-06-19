import React, {useState} from 'react';
import Product from '../product/Product';
import './Products.css';

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

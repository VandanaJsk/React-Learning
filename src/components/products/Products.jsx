import React, {useState} from 'react';
import Product from '../product/Product';
import './Products.css';

export default function Products(props) {

    const [products, setProducts] = useState([
        {
          id: 1,
          name: "Laptops-1  ",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/f/g/c/-original-imagp7pfkztgtg93.jpeg?q=70",
        },
        {
          id: 2,
          name: "Laptops-2",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/f/g/c/-original-imagp7pfkztgtg93.jpeg?q=70",
        },
        {
          id: 3,
          name: "Laptops-3 ",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/f/g/c/-original-imagp7pfkztgtg93.jpeg?q=70",
        },
        {
          id: 4,
          name: "Laptops-4",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/f/g/c/-original-imagp7pfkztgtg93.jpeg?q=70",
        },
      ]);
    
      const [grocery, setGrocery] = useState([
        {
          id: 1,
          name: "Potato-1",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/pasta/e/p/f/128-pazzta-cheesy-tomato-twist-64-grams-pack-of-2-64g-x-2-original-imaggd5faptrzfkf.jpeg?q=70",
        },
        {
          id: 2,
          name: "Potato-2",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/pasta/e/p/f/128-pazzta-cheesy-tomato-twist-64-grams-pack-of-2-64g-x-2-original-imaggd5faptrzfkf.jpeg?q=70",
        },
        {
          id: 3,
          name: "Potato-3",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/pasta/e/p/f/128-pazzta-cheesy-tomato-twist-64-grams-pack-of-2-64g-x-2-original-imaggd5faptrzfkf.jpeg?q=70",
        },
        {
          id: 4,
          name: "Potato-4",
          img: "https://rukminim1.flixcart.com/image/416/416/xif0q/pasta/e/p/f/128-pazzta-cheesy-tomato-twist-64-grams-pack-of-2-64g-x-2-original-imaggd5faptrzfkf.jpeg?q=70",
        },
      ]);
    
      return (
        <div className='products-wrapper'>
          <h4>Products saved for later</h4>
          <hr />
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

import React, { useState, useEffect } from 'react';
import './MyPhone.css';
import NewNavbar from '../newNavbar/NewNavbar';
import axios from 'axios';

export default function MyPhone() {

  const [data, setData] = useState([]);

useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((res) => {
        setData(res.data.products);
        console.log(res.data.products);
    })
}, []) 

  return (
    <>
    <div className='myphone-wrapper'>
      <NewNavbar/>
      <div className='main-div'>
        {data.map((each) => {
          return( 
          <div className='cards'>
            <img src={each.images[0]} alt="avtar" />
          <h3>{each.title}</h3>
          <p>{each.description}</p>
          <h4>{each.price}</h4>
          </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
